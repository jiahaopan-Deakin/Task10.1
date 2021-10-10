import React from "react";


function Button(props){
    return(
        <div>
            <button type="submit" onClick={props.onClick}>Post Task</button>
        </div>
    )
}

export default Button