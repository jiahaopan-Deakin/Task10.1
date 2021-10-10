import React from "react";

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
function Suburb(props){
    return(
        <div style={divstyle}>
            <p style={pstyle}>Suburb: </p>
            <input style={inputstyle} type="text" name="task_suburb" placeholder="Enter a suburb" onChange={props.onChange}/>
        </div>
    )
}

export default Suburb