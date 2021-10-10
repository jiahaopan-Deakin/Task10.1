import React from "react";

const inputstyle = {
    float: "left",
    width: "20px",
    marginRight: "10px",
    marginBottom:"10px"
}
const labelStyle = {
    float: "left",
    width: "100px",
    marginBottom:"10px"
}
const divstyle = {
    clear: "both"
}
function Budget(props){
    return(
        <div>
            
            <div style={divstyle}>
            <h2>Suggest how much</h2>
            <p>What is your budget?</p>
            </div>
            <div>
            <input style={inputstyle} id="total" type="radio" name="budget_type" value="total" defaultChecked onChange={props.onChange}/>
            <label style={labelStyle} for="total">Total</label>
            <input style={inputstyle} id="hourly" type="radio" name="budget_type" value="hourly" onChange={props.onChange}/>
            <label style={labelStyle} for="hourly">Hourly rate</label>   
            </div>
            <div style={divstyle}>
            <input type="text" name="budget_number" placeholder="$" onChange={props.onChange}/>
            </div>
            
        </div>
    )
}

export default Budget