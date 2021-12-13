import React, { useState, useEffect } from "react";

function Stopwatch() {
  let [CurrentTime, setCurrentTime] = useState(0);
  let [enter, setEnter] = useState(null);
  let [running, setRunning] = useState(false);

  useEffect(() => {
    if (running) {
      let timer = setInterval(() => {
        setCurrentTime(CurrentTime++);
      }, 1000);
      setEnter(timer);
      //   console.log(timer);
      return () => {};
    }
  }, [running]);

  function startTimer() {
    console.log("working");
    setRunning(true);
  }
  console.log(running);
  function stopTimer() {
    clearInterval(enter);
    setCurrentTime(0);
    setRunning(false);
  }

  function pauseStopwatch() {
    clearInterval(enter);
    setRunning(false);
  }

  return (
    <div>
      <h1>{CurrentTime} Second</h1>
      <button onClick={() => startTimer()}>start</button>
      <button onClick={() => pauseStopwatch()}>Pause</button>
      <button onClick={() => stopTimer()}>stop</button>
    </div>
  );
}

export default Stopwatch;
