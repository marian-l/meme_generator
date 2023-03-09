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

    const [interactableBoxes, setBoxes] = React.useState(boxes)

    function toggle(id) {
        setBoxes(boxes => boxes.map(box => {
            if (box.id === id) {
                return {
                    ...box,
                    on: !box.on
                }
            } else {
                return box;
            }
        }));
    }
    

    const boxElements = interactableBoxes.map(box => 
        <Box 
            on={box.on}
            id={box.id}
            key={box.id}
            toggle={toggle}
        />)

    return ( 
    <div>
        <h1>Boxes go here:</h1>
        {boxElements}
    </div>
        )
}