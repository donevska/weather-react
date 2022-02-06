import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {}
  let apiKey = "1394188b8b5a17b1b8eace0b77c04df0";
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-sm-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Mon</h5>
              <p>
                {" "}
                <span className="card-text min-temperature">7° </span>/{" "}
                <span className="max-temperature"> 12° </span>{" "}
              </p>
              <WeatherIcon className="forecast-image" code="01d" />
              <p>cloudy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
