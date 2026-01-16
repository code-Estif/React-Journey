import { createContext, useEffect, useState } from "react";

export const TasksContext = createContext();

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all"); // all | active | done

  // load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);

  // save to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(text) {
    setTasks([
      ...tasks,
      { id: Date.now(), text, done: false },
    ]);
  }

  function toggleTask(id) {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }
  
  const filteredTasks = tasks.filter(task => {
    if (filter === "active") return !task.done;
    if (filter === "done") return task.done;
    return true;
  });

  return (
    <TasksContext.Provider
      value={{
        tasks: filteredTasks,
        addTask,
        toggleTask,
        deleteTask,
        filter,
        setFilter,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
