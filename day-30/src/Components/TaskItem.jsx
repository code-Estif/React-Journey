import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";

function TaskItem({ task }) {
  const { toggleTask, deleteTask } = useContext(TasksContext);

  return (
    <li className={task.done ? "done" : ""}>
      <span onClick={() => toggleTask(task.id)}>
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>✕</button>
    </li>
  );
}

export default TaskItem;
