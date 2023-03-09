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

    const interactableBoxes = boxes.map(box => 
        <Box 
            on={box.on}
            key={box.id}
        />)

    return ( 
    <div>
        <h1>Boxes go here:</h1>
        {interactableBoxes}
        {/** 
        <NavBar />
        <UseState />
        <StateExercises />
        <MemeCreate />
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <Counter count={count}/>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
        <Contact />
        */}    
    </div>
        )
}