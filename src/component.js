import { useState } from "react";

function Component() {
    const [reach, setreach] = useState(true)
    const [count, setcount] = useState(0)
    function increase() {
        setcount(count + 1)
        setreach(true)
    }
    function decrease() {
        if (count === 0) {
            setcount(0)
            setreach(false)
        }
        else {
            setcount(count - 1)
        }

    }
    function reset() {
        setreach(true)
        setcount(0)
    }
    return (
        <div id="count-container">
            <h1 id="count">Counter App</h1>
            <div id="value"><h1>{count}</h1></div>
            <div id="button"><button onClick={increase}>Increase</button><button onClick={decrease}>Decrease</button><button onClick={reset}>Reset</button></div>
            {reach ? "" : <h2 id="reach">Minimum Limit Reached</h2>}
        </div>
    )
}

export default Component;