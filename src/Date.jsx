import React from "react";
import Suburb from "./Suburb";

const divstyle = {
    clear:"both"
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
function Date(props){    
    return(
        <div>
            <div style={divstyle}>
            <h2>Setting up your Task</h2>
            </div>
            {props.isPerson ? <Suburb onChange={props.onChange} /> : null}           
            <div style={divstyle}>
                <p style={pstyle}>Date: </p>
                <input style={inputstyle} type="text" name="task_date" placeholder="Enter a date" onChange={props.onChange}/>
            </div>
        </div>
    )
}

export default Date