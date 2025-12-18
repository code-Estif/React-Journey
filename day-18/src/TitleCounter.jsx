import { useState, useEffect } from "react";

function TitleCounter() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count; ${count}`;
    }, [count]);

    return(
        <div className="counter-box">
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}

export default TitleCounter;