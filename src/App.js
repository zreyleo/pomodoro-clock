import React, { useState } from 'react';

import TimerControl from './components/TimerControl';
import Timer from './components/Timer';

import './App.css'

function App() {
  const [sessiontime, setSessionTime] = useState(25);
  const [breaktime, setBreakTime] = useState(5);
  const [currentsession, setCurrentSession] = useState(sessiontime);
  const [currentbreak, setCurrentBreak] = useState(breaktime);
  const [status, setStatus] = useState(true); // this state tells me if the timer is running the session or the break
  const [running, setRunning] = useState(false); // this state tells me if the timer is running or not

  const playorpause = () => {
    setRunning(!running);
  };

  const BAS = [
    // session and break settings
    {
      idLabel: "session-label",
      labelName: "Senssion Length",
      idDecrement: "session-decrement",
      idIncrement: "session-increment",
      idLength: "session-length",
      time: sessiontime,
      setTime: setSessionTime,
      setCopy: setCurrentSession,
    },
    {
      idLabel: "break-label",
      labelName: "Break Length",
      idDecrement: "break-decrement",
      idIncrement: "break-increment",
      idLength: "break-length",
      time: breaktime,
      setTime: setBreakTime,
      setCopy: setCurrentBreak,
    },
  ];

  const setDefault = () => {
    // function to reset the pomodoro clock
    setSessionTime(25);
    setBreakTime(5);
    setStatus(true);
    setRunning(false);
    setCurrentSession(25);
    setCurrentBreak(5);
  };

  return (
    <div className="App">
      <h1 className="text-center my-5">Pomodoro Clock</h1>
      <div className="container">
        <div className="row">
          {BAS.map((setting, idx) => (
            <TimerControl key={idx} setting={setting} running={running} />
          ))}
          <Timer
            sessiontime={sessiontime}
            breaktime={breaktime}
            status={status}
            running={running}
            currentsession={currentsession}
            currentbreak={currentbreak}
            setCurrentSession={setCurrentSession}
            setCurrentBreak={setCurrentBreak}
            playorpause={playorpause}
            setDefault={setDefault}
            setStatus={setStatus}
            setRunning={setRunning}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
