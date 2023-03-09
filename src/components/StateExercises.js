import React from "react";

export default function StateExercises() {
    const [thingsArray, setThingsArray]  = React.useState(["Thing 1", "Thing 2"]) 
    function addItem() {
        // setThingsArray(prevState => prevState.concat(['new Thing']))
        // => dont modify the state yourself!
        setThingsArray(prevState => [...prevState, ` Thing ${prevState.length}`])
        // [...prevState] takes the prevState Arrays entries. ArraySpreadOperator!!
        // `Thing ${prevState.length}` is a format string which says Thing 3, Thing 4 and so on. 
    }
    const thingsElements = thingsArray.map(x => <p key={x}>{x}</p>)

    return (
        <div> 
            <div className="state--pattern">
                <button onClick={addItem} className="stateEx--button"/>
                {thingsArray}
                {thingsElements}
            </div>
        </div>
    )
}