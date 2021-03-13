import React from "react";

//all logic inside one function -> return the result
function Heading() {
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

  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}

export default Heading;
