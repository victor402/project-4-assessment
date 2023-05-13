import React from "react";
import "./CircleSelector.css";

const CircleSelector = (props) => {
  const handleChange = (event) => {
    props.handleSelect(event.target.value);
  };
  if (props.selected)
    return (
      <>
        <div className="CircleSelector">
          <button
            className={props.selected === "circleOne" ? "selected" : ""}
            value="circleOne"
            onClick={handleChange}
          >
            {props.selected === "circleOne"
              ? "Circle 1 Selected"
              : "Select Circle 1"}
          </button>
          <button
            className={props.selected === "circleTwo" ? "selected" : ""}
            value="circleTwo"
            onClick={handleChange}
          >
            {props.selected === "circleTwo"
              ? "Circle 2 Selected"
              : "Select Circle 2"}
          </button>
          <button>
            <button
              className={props.selected === "circleThree" ? "selected" : ""}
              value="circleThree"
              onClick={handleChange}
            >
              {props.selected === "circleThree"
                ? "Circle 3 Selected"
                : "Select Circle 3"}
            </button>
          </button>
          <button>
            <button
              className={props.selected === "circleFour" ? "selected" : ""}
              value="circleFour"
              onClick={handleChange}
            >
              {props.selected === "circleFour"
                ? "Circle 4 Selected"
                : "Select Circle 4"}
            </button>
          </button>
        </div>
      </>
    );
};

export default CircleSelector;
