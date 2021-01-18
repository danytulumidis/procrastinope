import React from "react";
import "./Progressbar.scss";
import Countdown from "../Countdown/Countdown";

const Progressbar = (props) => {
  const { time, setPomoFinished, resetPomo } = props;

  const endPomodoro = (interval) => {
    clearInterval(interval);
    setPomoFinished(true);
    resetPomo();
  };

  return (
    <div className='progress'>
      <Countdown startTime={time} endPomodoro={endPomodoro} />
    </div>
  );
};

export default Progressbar;
