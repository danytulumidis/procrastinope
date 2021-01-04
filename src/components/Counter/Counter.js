import React from "react";
import "./Counter.scss";

const Counter = ({ finishedPomoCounter }) => {
  return (
    <div>
      <h2 className='counter-header'>
        Your finished Pomodoros: {finishedPomoCounter}
      </h2>
    </div>
  );
};

export default Counter;
