import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";
import TaskItem from "./TaskItem";

function TaskList() {
  const { tasks } = useContext(TasksContext);

  if (tasks.length === 0) {
    return <p>No tasks</p>;
  }

  return (
    <ul>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TaskList;
