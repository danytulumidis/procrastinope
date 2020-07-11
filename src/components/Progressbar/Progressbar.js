import React from "react";
import "./Progressbar.scss";
import { Circle } from "rc-progress";

const Progressbar = (props) => {
  const { time, start } = props;

  // setInterval(() => {
  //   console.log(test--);
  // }, 1000);

  if (!start) {
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
      <div>
        <h1 className='closer'>{time}</h1>
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
