// https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks

import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = () => {
  const [seconds, setSeconds] = useState(1500);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(1500);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive && seconds !== 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  // https://stackoverflow.com/questions/1322732/convert-seconds-to-hh-mm-ss-with-javascript
  function convertSeconds(seconds) {
    return new Date(seconds * 1000).toISOString().substr(14, 5);
  }

  return (
    <div className="app">
      <div className="time">{convertSeconds(seconds)}</div>
      <div className="row">
        <button
          className={`button button-primary button-primary-${
            isActive ? 'active' : 'inactive'
          }`}
          onClick={toggle}
        >
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="button button-reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
