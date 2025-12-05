import { useState } from "react";

function TypingBox() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div className="typing-box">
      <input
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>{text}</p>
      <p className="length">{text.length}/500</p>
    </div>
  );
}

export default TypingBox;