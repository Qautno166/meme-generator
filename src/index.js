import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import "./index.css";
// 1st Challange
// const page = (
//   <div>
//     <h1> To jest moja znakomita strona</h1>
//     <h3>Będę tutaj poznawal React</h3>
//     <ol>
//       <li> It's composable</li>
//       <li>It's hirable skill</li>
//       <li>It's only for the skillest people</li>
//       <li>It's declatative</li>
//     </ol>
//   </div>
// );
// ReactDOM.render(page, document.getElementById("root"));

// 2nd Challeng

const first = (
  <div>
    <img className="pic" src="logo.png" alt="" />
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originaly created by Jordan Walke</li>
      <li>Has well over 100k stars on GitHub</li>
      <li>Is maintainde by Facebook</li>
      <li>Powers thousand of enterprise apps, including mobile apps</li>
    </ul>
  </div>
);
ReactDOM.render(first, document.getElementById("root"));
