import React from "react";

export default function Box(props) {
    const [isFilled, setFilled] = React.useState(props.on)
    
    const style = {
        backgroundColor: isFilled ? "#222222" : "transparent"
    };

    function toggleColor() {
        setFilled(prevIsFilled => !prevIsFilled)
    }
    
    return (
        <div 
            className="boxes"
            style={style} /* JSX wants to have an object for cssStyles!! */
            onClick={toggleColor}>
        </div>
            )
}
