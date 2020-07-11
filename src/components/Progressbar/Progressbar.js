import React, { useState } from "react";
import "./Progressbar.scss";
import { Circle } from "rc-progress";

const Progressbar = (props) => {
  const { time, started } = props;

  // minutes * 60 = seconds
  const [countdown, setCountdown] = useState(0);

  if (started) {
    setInterval(() => {
      let counter = countdown;
      setCountdown(counter--);
      console.log(countdown);
    }, 1000);
  }

  if (!started) {
    return (
      <div>
        <Circle
          percent='0'
          strokeWidth='10'
          trailWidth='10'
          trailColor='white'
          strokeColor='#6ff403'
          className='adjust'
        />
      </div>
    );
  } else {
    return (
      <div className='progress'>
        <h1 className='closer'>todo: timer</h1>
        <Circle
          percent='0'
          strokeWidth='10'
          trailWidth='10'
          trailColor='white'
          strokeColor='#6ff403'
          className='adjust'
        />
      </div>
    );
  }
};

export default Progressbar;
