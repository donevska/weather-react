import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="small">
      <small>
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
      </small>
    </div>
  );
}
