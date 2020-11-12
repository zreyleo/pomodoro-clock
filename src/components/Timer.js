import React, { useState, useEffect } from "react";

const Timer = (props) => {
  const {
    sessiontime,
    breaktime,
    status,
    running,
    currentsession,
    currentbreak,
    setCurrentSession,
    setCurrentBreak,
    setDefault,
    playorpause,
    setStatus,
  } = props;

  const [count, setCount] = useState(60);

  useEffect(() => {
    if (running) {
      if (status) {
        if (count === 60) {
          setCurrentSession(currentsession - 1);
          setCount(59);
        }
        const timeout = setTimeout(() => {
          if (currentsession === 0 && count === 1)
            document.getElementById("beep").play();
          if (currentsession === 0 && count === 0) {
            document.getElementById("beep").play();
            setStatus(false);
            setCurrentSession(sessiontime);
            setCount(60);
          } else {
            setCount((count) => (count === 0 ? 60 : count - 1));
          }
        }, 1000);
        return () => clearTimeout(timeout);
      } else {
        if (count === 60) {
          setCurrentBreak(currentbreak - 1);
          setCount(59);
        }
        const timeout = setTimeout(() => {
          if (currentbreak === 0 && count === 1)
            document.getElementById("beep").play();
          if (currentbreak === 0 && count === 0) {
            setStatus(true);
            setCurrentBreak(breaktime);
            setCount(60);
          } else {
            setCount((count) => (count === 0 ? 60 : count - 1));
          }
        }, 1000);
        return () => clearTimeout(timeout);
      }
    }
  }, [
    running,
    status,
    count,
    setCurrentSession,
    currentsession,
    setStatus,
    sessiontime,
    setCurrentBreak,
    currentbreak,
    breaktime,
  ]);

  const reset = () => {
    setDefault();
    setCount(60);
    document.getElementById("beep").pause();
    document.getElementById("beep").currentTime = 0;
  };

  return (
    <div className="col-12 mt-5 d-flex justify-content-center">
      <div className="d-flex flex-column align-items-center border border-info py-3 px-5 rounded-pill">
        <h3 id="timer-label">{status ? "Session" : "Break"}</h3>
        {status ? (
          <span id="time-left" className="display-3 mx-5">
            {currentsession < 10 ? "0" + currentsession : currentsession}:
            {count === 60 ? "00" : count < 10 ? "0" + count : count}
          </span>
        ) : (
          <span id="time-left" className="display-3 mx-5">
            {currentbreak < 10 ? "0" + currentbreak : currentbreak}:
            {count === 60 ? "00" : count < 10 ? "0" + count : count}
          </span>
        )}
        <div>
          <button
            onClick={playorpause}
            id="start_stop"
            className="btn btn-secondary"
          >
            <i className="fas fa-play"></i>
            <i className="fas fa-pause"></i>
          </button>
          <span className="mx-3"></span>
          <button onClick={reset} id="reset" className="btn btn-warning">
            <i className="fas fa-sync-alt"></i>
          </button>
        </div>
      </div>
      <audio
        id="beep"
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
      {/* audio tag taken from the example of freeCodeCamp: https://codepen.io/freeCodeCamp/full/XpKrrW */}
    </div>
  );
};

export default Timer;
