import React from "react";
import ReactDOM from "react-dom";

let greeting = "Good Morning!";
const customStyle = {
  color: "blue"
};

const currentTime = new Date().getHours();

if (currentTime < 12) {
  customStyle.color = "red";
} else if (currentTime < 18) {
  customStyle.color = "green";
  greeting = "Good Afternoon!";
} else {
  greeting = "Good Night!";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
