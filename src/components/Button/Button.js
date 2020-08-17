/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, Fragment } from "react";
import "./Button.scss";

const Button = ({ startPomodoro, time }) => {
  const [error, setError] = useState(false);

  const timeError = () => {
    setError(true);
  };

  if (time < 1) {
    return (
      <Fragment>
        <a className="link-pointer" onClick={() => timeError()}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          START
        </a>
        {error && <h1>Please set a valid time</h1>}
      </Fragment>
    );
  } else {
    return (
      <a onClick={() => startPomodoro(true)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        START
      </a>
    );
  }
};

export default Button;
