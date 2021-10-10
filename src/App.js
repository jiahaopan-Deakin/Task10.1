import './App.css';
import React, { useState } from 'react';
import Tasktpye from './Tasktype';
import Description from './Describe'
import Date from './Date'
import Budget from './Budget';
import Button from './Button';

function App() {
    const [state, setState] = useState(true)
    const [task, setTask] = useState({
        task_type: '',
        task_tittle: '',
        task_description: '',
        task_suburb: '',
        task_date: '',
        budget_type: '',
        budget_number: ''
    })
    const TypeChange = (event)=>{
      if(event.target.value === "person"){
        setState(true)
        setTask((preValue)=>{
            return{
                ...preValue,
                task_type: "person"
            }
        })
      }
      else{
        setState(false)
        setTask((preValue)=>{
            return{
                ...preValue,
                task_type: "online"
            }
        })
      }
    }
    const handleChange = (event)=>{
        const {name, value} = event.target
        setTask((preValue)=>{
            return{
                ...preValue,
                [name]: value
            }
        })
    }
    const handleClick = ()=>{
        fetch('http://localhost:5000/task',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                task_type: task.task_type,
                task_tittle: task.task_tittle,
                task_description: task.task_description,
                task_suburb: task.task_suburb,
                task_date: task.task_date,
                budget_type: task.budget_type,
                budget_number: task.budget_number
            })
        })
        .then(response => response.json())
        .then(data => console(data))
        .catch(err=>{
            console.log("Error: " + err)
        })
    }
    return(
    <div>
        <Tasktpye onChange={TypeChange}/>
        <Description onChange={handleChange}/>
        <Date isPerson={state} onChange={handleChange}/>
        <Budget onChange={handleChange}/>
        <Button onClick={handleClick} />
    </div>)
    
}

export default App;
