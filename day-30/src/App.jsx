import { TasksProvider } from "./context/TasksContext";
import TaskInput from "./Components/TaskInput";
import TaskList from "./Components/TaskList";
import Filter from "./Components/Filter";
import './App.css'

function App() {
  return (
    <TasksProvider>
      <div className="app">
        <h2>Task Manager</h2>
        <TaskInput />
        <Filter />
        <TaskList />
      </div>
    </TasksProvider>
  );
}

export default App;
