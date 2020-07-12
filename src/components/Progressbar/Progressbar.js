import React, { useState, useEffect } from "react";
import "./Progressbar.scss";
import { Circle } from "rc-progress";

const Progressbar = (props) => {
  const { time } = props;

  const convertTime = (time) => {
    const convertedTime = time * 60;
    return convertedTime;
  };

  const [countdown, setCountdown] = useState(convertTime(time));

  useEffect(() => {
    const interval = setInterval(() => {
      countdown > 0
        ? setCountdown((newCountdown) => newCountdown - 1)
        : clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div className='progress'>
      <h1 className='closer'>{countdown}</h1>
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
