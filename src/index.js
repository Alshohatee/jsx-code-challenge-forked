//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1> what I am going to do this week</h1>
    <ul>
      <li>study react </li>
      <li>do homework </li>
      <li>study react </li>
    </ul>
  </div>,
  document.getElementById("root")
);
