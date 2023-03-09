import React from "react";

export default function Box(props) {
    {/* UNIFIED STATE */}
    const style = {
        backgroundColor: props.on ? "#222222" : "transparent"
    };
    
    return (
        <div 
            className="boxes"
            style={style} /* JSX wants to have an object for cssStyles!! */
            onClick={()=>props.toggle(props.id)}>
        </div>
            )
}
