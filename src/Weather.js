import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Skopje",
    temperature: 5,
    date: "Monday 20:00",
    description: "Clouds",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png",
    feelsLike: 3,
    humidity: 70,
    wind: 2,
  };

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

            <h5>{weatherData.date}</h5>
            <em>{weatherData.description}</em>
          </div>

          <div className="col-4">
            <div className="clearfix weather-temperature">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="float-left"
              />

              <strong>{weatherData.temperature}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
          <div className="col-3">
            <ul>
              <li> Feels like: {weatherData.feelsLike}°C</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
