import { useState } from "react";

function Togglecounter() {
  const [open, setopen] = useState(true)

  function toggle() {
    if(open === false) {
      setopen(open => !open)
    }
  }

  return (
     <div className="toggle-card">
      <button onClick={toggle}>
        {open ? "Hide Details" : "Show Details"}
      </button>

      {open && (
        <div className="details">
          <p>Age: 17</p>
          <p>City: Markos</p>
          <p>Role : Frontend Developer</p>
        </div>
      )}
    </div>
  );
}

export default Togglecounter
