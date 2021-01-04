import React, { useState, useEffect } from "react";
import "./Countdown.scss";

const Countdown = ({ startTime }) => {
  const [time, setTime] = useState(startTime * 60);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMinutes(Math.floor(time / 60));
      setSeconds(time >= 10 ? time % 60 : "0" + (time % 60));
      setTime(time - 1);
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div>
      <h1>{`${minutes}:${seconds}`}</h1>
    </div>
  );
};

export default Countdown;
