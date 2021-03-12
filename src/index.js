import React from "react";
import ReactDOM from "react-dom";

var greeting = "Good Morning!";
const customStyle = {
  color: "blue"
};

const currentTime = new Date().getHours();

if (currentTime > 0 && currentTime < 12) {
  customStyle.color = "red";
} else if (currentTime > 12 && currentTime < 18) {
  customStyle.color = "green";
  greeting = "Good Afternoon!";
} else {
  greeting = "Good Evening!";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
