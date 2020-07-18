import React, { useState } from "react";
import "./Pomodoro.scss";
import Button from "../Button/Button";
import Progressbar from "../Progressbar/Progressbar";
import Timer from "../Timer/Timer";
import FinishAlert from "../FinishAlert/FinishAlert";

// TODOs
// Design changes
// Promodoro Counter

function Pomodoro() {
  const [time, setTime] = useState(0);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  const setPomoTime = ($event) => {
    setTime($event.target.value);
  };

  const setPomoFinished = () => {
    setFinished(true);
  };

  const startPomodoro = () => {
    setFinished(false);
    setStarted(true);
  };

  const resetPomo = () => {
    setStarted(false);
  };

  return (
    <div className='pomodoro'>
      <h2 className='pomo-header'>Pomodoro Section</h2>
      <Button startPomodoro={startPomodoro} time={time} />
      <Timer setPomoTime={setPomoTime} started={started} />
      {started && (
        <Progressbar
          time={time}
          setPomoFinished={setPomoFinished}
          resetPomo={resetPomo}
        />
      )}
      {finished && <FinishAlert />}
    </div>
  );
}

export default Pomodoro;
