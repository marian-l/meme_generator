import React from "react";

export default function Counter(props) { 
    return (
        <div className="counter--count">
            <h1>{props.count}</h1>
        </div>
    )
}