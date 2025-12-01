import { useState } from "react";

function CounterPlusMinus() {
    const [count, setcount] = useState(0)

    function increase() {
        setcount(count + 1)
    }

    function decrease() {
        if(count > 0) {
            setcount(count - 1)
        }
    }

    return (
        <div className="counter-box">
            <h2 className="count-number">{count}</h2>
            <button className="btn-minus" onClick={decrease}>-</button>
            <button className="btn-plus" onClick={increase}>+</button>
        </div>
    )
}

export default CounterPlusMinus