import React, { useState, useEffect } from "react";
import "./Countdown.scss";

const Countdown = ({ startTime, endPomodoro }) => {
  const [time, setTime] = useState(new Date().getTime()+ (startTime * 60 * 1000));
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let distance = time - new Date().getTime();

      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
      setTime(time - 1);
      if (distance < 0) {
        endPomodoro();
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  });

  return (
    <div>
      <h1>{`${minutes}:${seconds < 10 ? "0" + seconds : seconds}`}</h1>
    </div>
  );
};

export default Countdown;
