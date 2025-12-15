import { useState } from "react";

function TasksObjects() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Practice Arrays" }
  ]);

  function addTask() {
    setTasks([
      ...tasks,
      { id: Date.now(), text: "New Task" }
    ]);
  }

  function removeTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <div className="task-container">
      <h2>Task Manager</h2>

      {tasks.map(task => (
        <div className="task-row" key={task.id}>
          <p>{task.text}</p>
          <button className="add-btn" onClick={() => removeTask(task.id)}>Remove</button>
        </div>
      ))}

      <button onClick={addTask}>Add+</button>
    </div>
  );
}

export default TasksObjects;
