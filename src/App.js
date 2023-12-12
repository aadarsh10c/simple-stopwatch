import { useState, useRef } from "react";
import "./styles.css";

export default function App() {
  const [start, setStart] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  const handleStart = () => {
    setStart(Date.now());
    setNow(Date.now());
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => setNow(Date.now()), 10);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
  };

  let secondsPassed = 0;
  if (start !== null && stop !== null) {
    secondsPassed = (now - start) / 1000;
  }
  return (
    <div className="App">
      <h1>Seconds Passed : {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
