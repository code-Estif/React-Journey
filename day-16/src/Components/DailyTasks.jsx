import { useState } from "react";

function DailyTasks() {

    const [todos, setTodos] = useState([
        "learn react",
        "commit to git",
        "study maths",
        "go school"
    ]);

    function addTask() {
        setTodos([...todos, "eat lunch"]);
    }

    function removeTask(taskToRemove) {
        setTodos(todos.filter(task => task !== taskToRemove));
    }

    return (
        <div className="tasks-container">
            <h2>My Daily Tasks</h2>

            {todos.map((task, index) => (
                <div className="tasks-row" key={index}>
                    <p>{task}</p>
                    <button onClick={() => removeTask(task)}>remove</button>
                </div>
            ))}

            <button className="add-btn" onClick={addTask}>Add Task +</button>
        </div>
    );
}

export default DailyTasks;
