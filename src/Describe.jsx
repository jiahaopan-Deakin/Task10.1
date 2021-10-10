import React from "react";

const heading = {
    clear: "both"
}
const pstyle = {
    float: "left",
    marginRight: "20px",
    marginTop: "10px"
}
const inputstyle = {
    float: "left",
    width:"300px",
    marginRight: "10px",
    marginTop: "10px"
}
const inputstyle2 = {
    float: "left",
    marginRight: "10px",
    marginTop: "10px",
    width:"300px",
    height:"50px"
}
const divstyle = {
    clear: "both"
}

function description(props){
    return(<div>
        <h2 style = {heading}>Describe your task to Experts:</h2>
        <p style={pstyle}>Task Title: </p>
        <input style={inputstyle} type="text" name="task_tittle" placeholder="Enter task title" onChange={props.onChange}/>
        <div style={divstyle}>
        <p style={pstyle}>Description: </p>
        <input style={inputstyle2} type="text" name="task_description" placeholder="Enter task description" onChange={props.onChange}/>
        </div>
        
    </div>)
}

export default description