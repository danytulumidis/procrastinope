import React, { useState, useEffect } from "react";
import "./Progressbar.scss";
import { Circle } from "rc-progress";

const Progressbar = (props) => {
  const { time } = props;

  const [countdown, setCountdown] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      countdown > 0
        ? setCountdown((newCountdown) =>
            Number(newCountdown - 100 / (time * 60)).toFixed(2)
          )
        : clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div className='progress'>
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
