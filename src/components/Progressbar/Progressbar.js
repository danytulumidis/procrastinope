import React from "react";
import "./Progressbar.scss";
import { Circle } from "rc-progress";

const Progressbar = (props) => {
  const { time } = props;

  return (
    <Circle
      percent={time}
      strokeWidth='10'
      trailWidth='10'
      trailColor='white'
      strokeColor='#6ff403'
      className='adjust'
    />
  );
};

export default Progressbar;
