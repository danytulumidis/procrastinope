import React from "react";
import "./Pomodoro.scss";
import Button from "../Button/Button";
import Progressbar from "../Progressbar/Progressbar";
import Timer from "../Timer/Timer";

function Pomodoro() {
  return (
    <div className='pomodoro'>
      <h2 className='pomo-header'>Pomodoro Section</h2>
      <Button />
      <Timer />
      <Progressbar />
    </div>
  );
}

export default Pomodoro;
