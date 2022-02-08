import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{day()}</h5>
          <p>
            <span className="card-text min-temperature">
              {minTemperature()}
            </span>
            /<span className="max-temperature">{maxTemperature()}</span>
          </p>
          <WeatherIcon
            className="forecast-image"
            code={props.data.weather[0].icon}
          />
          <p>{props.data.weather[0].main}</p>
        </div>
      </div>
    </div>
  );
}
