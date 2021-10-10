import React from "react";

const pstyle = {
    float: "left",
    marginRight: "20px",
    marginTop: "10px"
}
const inputstyle = {
    float: "left",
    width: "20px",
    marginRight: "10px",
    marginTop: "10px"
}
const labelStyle = {
    float: "left",
    width: "100px",
    marginTop: "10px"
}

function Tasktpye(props) {
    return(
        <div>
            <h2><b>New Task</b></h2>
            <div>
            <p style={pstyle}>Select Task Type:</p>
            <input style={inputstyle} id="inperson" type="radio" name="task_type" value="person" defaultChecked onChange={props.onChange}/>
            <label style={labelStyle} for="inperson">In Person</label>
            <input style={inputstyle} id="online" type="radio" name="task_type" value="online" onChange={props.onChange}/>
            <label style={labelStyle} for="online">Online</label>
            </div>         
        </div>)
}

export default Tasktpye