import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Skopje" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/angela-donevska"
            target="_blank"
            rel="noopener noreferrer"
          >
            Angela Donevska
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/donevska/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github.
          </a>
        </footer>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
