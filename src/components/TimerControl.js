import React from "react";

const TimerControl = (props) => {
  const {
    idIncrement,
    idDecrement,
    idLabel,
    labelName,
    time,
    setTime,
    idLength,
    setCopy,
  } = props.setting;

  const { running } = props;

  const incrementTime = () => {
    if (time >= 60 || running) return;
    setTime(time + 1);
    setCopy(time + 1);
  };

  const decrementTime = () => {
    if (time <= 1 || running) return;
    setTime(time - 1);
    setCopy(time - 1);
  };

  return (
    <div className="col-12 col-md-6">
      <h2 id={idLabel} className="text-center font-weight-bold">
        {labelName}
      </h2>
      <div
        className="col-12 d-flex justify-content-center align-items-center"
        style={{
          fontSize: "2.5rem",
        }}
      >
        <button className="btn btn-primary" onClick={incrementTime}>
          <i id={idIncrement} className="fas fa-chevron-up"></i>
        </button>
        <span id={idLength} className="mx-5">
          {time}
        </span>
        <button className="btn btn-danger" onClick={decrementTime}>
          <i id={idDecrement} className="fas fa-chevron-down"></i>
        </button>
      </div>
    </div>
  );
};

export default TimerControl;