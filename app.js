// ...existing code...
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// ...existing code...

const test = React.createElement(
  "div",
  { id: "one" },
  [
    React.createElement("h1", null, "hello world!!!!"),
    React.createElement("h1", null, "hello indiaa!!!!")
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(test);
// ...existing code...