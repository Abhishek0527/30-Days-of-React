import { useEffect, useRef, useState } from "react";


const Day1 = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    return ()=> clearInterval(timerRef.current)
  }, [])

  //useEffect for avoiding memory leak

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      },1000)
    }
  };
  const handleStop = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(timerRef.current)
    }
  };
  const handleReset = () => {
    setIsRunning(false);
    clearInterval(timerRef.current)
    setTimer(0);
  };

  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${mins}:${secs}`;
  }



  return (
    <div>
      <h1>⏱️Stop Watch</h1>
      <h2>{formatTime(timer) }</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
export default Day1;