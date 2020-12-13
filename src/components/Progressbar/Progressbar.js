import React, { useState, useEffect } from "react";
import "./Progressbar.scss";
import { Circle } from "rc-progress";
import Countdown from "../Countdown/Countdown";

const Progressbar = (props) => {
  const { time, setPomoFinished, resetPomo } = props;

  const [countdown, setCountdown] = useState(100);

  const endPomodoro = (interval) => {
    clearInterval(interval);
    // Reset Progressbar
    setCountdown(0);
    setPomoFinished(true);
    resetPomo();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      countdown > 0
        ? setCountdown((newCountdown) =>
            Number(newCountdown - 100 / (time * 60)).toFixed(2)
          )
        : endPomodoro(interval);
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div className='progress'>
      <Countdown startTime={time} />
      <Circle
        percent={countdown}
        strokeWidth='10'
        trailWidth='10'
        trailColor='white'
        strokeColor='#6ff403'
        className='adjust'
      />
    </div>
  );
};

export default Progressbar;
