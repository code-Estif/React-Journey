import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const intervalId = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [running]);

  function startTimer() {
    setRunning(true);
  }

  function stopTimer() {
    setRunning(false);
  }

  function resetTimer() {
    setSeconds(0);
    setRunning(false);
  }

  return (
    <div className="timer-box">
      <h2>Timer</h2>
      <div className="timer-time">{seconds}s</div>

      <div className="timer-actions">
        <button className="start-btn" onClick={startTimer}>Start</button>
        <button className="stop-btn" onClick={stopTimer}>Stop</button>
        <button className="reset-btn" onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;
