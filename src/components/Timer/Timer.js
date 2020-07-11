import React from "react";
import "./Timer.scss";

function Timer({ setPomoTime, started }) {
  if (!started) {
    return (
      <div className='timer'>
        <h1>Time</h1>
        <input
          type='number'
          placeholder='min'
          onChange={(e) => setPomoTime(e)}
        ></input>
      </div>
    );
  } else {
    return (
      <div className='timer'>
        <h1>Time</h1>
        <input type='number' placeholder='min' readOnly></input>
      </div>
    );
  }
}

export default Timer;
