import React, { useState } from "react";
import "./Pomodoro.scss";
import Button from "../Button/Button";
import Progressbar from "../Progressbar/Progressbar";
import Timer from "../Timer/Timer";
import FinishAlert from "../FinishAlert/FinishAlert";
import Counter from "../Counter/Counter";

// TODOs
// Design changes

function Pomodoro() {
  const [time, setTime] = useState(0);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [finishedPomoCounter, setfinishedPomoCounter] = useState(0);

  const setPomoTime = ($event) => {
    setTime($event.target.value);
  };

  const setPomoFinished = () => {
    setFinished(true);
    setfinishedPomoCounter(finishedPomoCounter + 1);
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
      <Counter finishedPomoCounter={finishedPomoCounter} />
    </div>
  );
}

export default Pomodoro;
