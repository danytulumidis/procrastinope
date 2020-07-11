import React, { useState } from "react";
import "./Pomodoro.scss";
import Button from "../Button/Button";
import Progressbar from "../Progressbar/Progressbar";
import Timer from "../Timer/Timer";

function Pomodoro() {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  const setPomoTime = ($event) => {
    setTime($event.target.value);
  };

  const startPomodoro = () => {
    setStart(true);
  };

  return (
    <div className='pomodoro'>
      <h2 className='pomo-header'>Pomodoro Section</h2>
      <Button startPomodoro={startPomodoro} time={time} />
      <Timer setPomoTime={setPomoTime} />
      <Progressbar time={time} start={start} />
    </div>
  );
}

export default Pomodoro;
