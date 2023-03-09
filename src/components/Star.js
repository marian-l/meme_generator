import React from "react";
import starBorder from "../images/star-regular.svg"
import starFilled from "../images/star-solid.svg"

export default function Star(props) {
    const star = props.isFilled ? starFilled : starBorder
    return (
            <img className="state--favorite"
                src={star}
                onClick={props.handleClick}/>            
        )
}