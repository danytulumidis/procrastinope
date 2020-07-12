import React, { useState } from "react";
import "./Pomodoro.scss";
import Button from "../Button/Button";
import Progressbar from "../Progressbar/Progressbar";
import Timer from "../Timer/Timer";

function Pomodoro() {
  const [time, setTime] = useState(0);
  const [started, setStarted] = useState(false);

  const setPomoTime = ($event) => {
    setTime($event.target.value);
  };

  const startPomodoro = () => {
    setStarted(true);
  };

  return (
    <div className='pomodoro'>
      <h2 className='pomo-header'>Pomodoro Section</h2>
      <Button startPomodoro={startPomodoro} time={time} />
      <Timer setPomoTime={setPomoTime} started={started} />
      {started && <Progressbar time={time} />}
    </div>
  );
}

export default Pomodoro;
