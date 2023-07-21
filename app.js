import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement(
    "h1",
    {id: "heading"},
    "Hello World from React!");

console.log(heading); // object

const root  = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);