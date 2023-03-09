import React from "react";

export default function UseState() {
    const [Answer, setAnswer] = React.useState(0) 
    {/* can also be abbreviated by importing useState from React directly */}
    {/** console.log(React.useState()) logs "undefined" a state passed to useState. Whatever is passed though, is default value. */}

    // this increments the Answer variable and triggers a new rendering because it is a stateful variable
    // this is the long version of the code inside the "state--button" classes
    function add() {
        return setAnswer(Answer => Answer + 1)
    }

    const [goingOutState, setGoingOutState] = React.useState("no")
    function flipState() {
        return setGoingOutState(goingOutState => goingOutState === "yes" ? "no" : "yes")
    }

    return ( 
        <div className="state">
            <div className="state--value" >
                <h2 className="state--button" onClick={() => setAnswer(Answer => Answer + 1)}>+</h2>
                <h1>{Answer}</h1>
                <h2 className="state--button" onClick={() => setAnswer(Answer => Answer - 1)}>-</h2>
            </div>
            <div className="state--ternary" onClick={flipState}> 
                <h1> {goingOutState} </h1>
            </div>
        </div>
    )
}