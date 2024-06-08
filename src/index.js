import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./project1/App";
//import App from "./project2/App";
//import App from "./project3/App";
//import App from "./project4/App";
//import App from "./project5/App";
import App from "./project6/App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
