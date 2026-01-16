import { useContext, useRef, useState } from "react";
import { TasksContext } from "../context/TasksContext";

function TaskInput() {
  const [text, setText] = useState("");
  const inputRef = useRef(null);
  const { addTask } = useContext(TasksContext);

  function handleAdd() {
    if (!text.trim()) return;
    addTask(text);
    setText("");
    inputRef.current.focus();
  }

  return (
    <div className="input-box">
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New task..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TaskInput;
