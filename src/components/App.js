import React from "react";
import NavBar from "./NavBar";
import MemeCreate from "./MemeCreate";
import UseState from "./UseState";
import StateExercises from "./StateExercises"
import Contact from "./Contact";
import Counter from "./Counter";
import Box from "./Box";
import boxes from "../data/boxes"

export default function App() {
    const [count, setCount] = React.useState(0)
    function add() {
        setCount(count => count + 1)
    }
    function subtract() {
        setCount(count => count - 1)
    }

    // state variable and function for boxes
    const [interactableBoxes, setBoxes] = React.useState(boxes)

    function toggle(id) {
        setBoxes(boxes => {
            return boxes.map(
                box => { return box.id === id ? {...box, on: !box.on} : {...box}
                // if the id matches the box's id, we can modify the box object.
            }
        )})
    }
    
    // create the box elements to be rendered
    const boxElements = interactableBoxes.map(box => 
        <Box 
            on={box.on}
            id={box.id}
            key={box.id}
            toggle={toggle}
         /*toggle={() => toggle(box.id)} */
        />)

    return ( 
    <div>
        <h1>Boxes go here:</h1>
        {boxElements}
    </div>
        )
}