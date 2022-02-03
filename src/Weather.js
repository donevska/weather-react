import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      feelsLike: response.data.main.feels_like,
      city: response.data.name,
      description: response.data.weather[0].main,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png",
      date: new Date(response.data.dt * 1000),
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="mb-3">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Pick a city.."
                className="form-control"
                autoComplete="off"
                autoFocus="on"
              />
            </div>
            <div className="col-2">
              <button type="submit" className="btn btn-primary w-100">
                {" "}
                Search
              </button>
            </div>
            <div className="col-3">
              <button type="submit" className="btn btn-primary">
                Current location
              </button>
            </div>
          </div>{" "}
        </form>

        <div className="overview">
          <div className="row">
            <div className="col-3">
              <h1>{weatherData.city}</h1>

              <h5>
                <FormattedDate date={weatherData.date} />
              </h5>
              <em>{weatherData.description}</em>
            </div>

            <div className="col-4">
              <div className="clearfix weather-temperature">
                <img
                  src={weatherData.iconUrl}
                  alt="cloudy"
                  className="float-left"
                />

                <strong className="temperature">
                  {Math.round(weatherData.temperature)}
                </strong>
                <span className="units">
                  <a href="/">°C</a> | <a href="/">°F</a>
                </span>
              </div>
            </div>
            <div className="col-3">
              <ul>
                <li> Feels like: {Math.round(weatherData.feelsLike)}°C</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {Math.round(weatherData.wind * 3.6)} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "1394188b8b5a17b1b8eace0b77c04df0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading";
  }
}
