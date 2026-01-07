import { useRef } from "react";

function FocusPractice() {
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus();
  }

  return (
    <div className="container">
      <div className="input-wrapper">
        <input ref={inputRef} placeholder="Type here" className="input" />
        <button onClick={handleFocus} className="btn">Focus</button>
      </div>
    </div>
  );
}

export default FocusPractice;
