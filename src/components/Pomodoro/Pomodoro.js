import React from "react";
import "./Pomodoro.scss";
import Button from "../Button/Button";
import Progressbar from "../Progressbar/Progressbar";

function Pomodoro() {
  return (
    <div className='pomodoro'>
      <h2 className='pomo-header'>Pomodoro Section</h2>
      <Button />
      <Progressbar />
    </div>
  );
}

export default Pomodoro;
