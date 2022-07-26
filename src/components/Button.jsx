import React from "react";
import "./Button.css";

const Btn = ({ modal, setModal }) => {
  return (
    <div>
      <h1 className="title">Click Me To Open The Modal</h1>
      <button onClick={() => setModal((prev) => !prev)} className="btn">
        Modal
      </button>
    </div>
  );
};

export default Btn;
