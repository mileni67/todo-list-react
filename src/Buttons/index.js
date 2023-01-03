import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone }) => (
  <div className="buttons">
    {tasks.length > 0 && (
      <React.Fragment>
        <button className="buttons__button">
          {hideDone === false ? "Ukryj" : "Pokaż"} ukończone
        </button>

        <button
          disabled={tasks.every(({ done }) => done) ? "disabled" : ""}
          className="buttons__button"
        >
          Ukończ wszystkie
        </button>
      </React.Fragment>
    )}
  </div>
);
export default Buttons;