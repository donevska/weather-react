import React from "react";
import FormattedDate from "./FormattedDate";

import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="overview">
        <div className="row">
          <div className="col-4">
            <h1>{props.data.city}</h1>

            <h5>
              <FormattedDate date={props.data.date} />
            </h5>
            <em>{props.data.description}</em>
          </div>

          <div className="col-2">
            <div className="clearfix weather-temperature">
              <div>
                <WeatherIcon className="float-left" code={props.data.icon} />
              </div>
            </div>
          </div>

          <div className="col-3">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>

          <div className="col-3">
            <ul>
              <li> Feels like: {Math.round(props.data.feelsLike)}°C</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind * 3.6)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
