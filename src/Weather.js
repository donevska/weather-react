import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${props.city} is ${response.data.main.temp} C`);
  }
  let apiKey = "1394188b8b5a17b1b8eace0b77c04df0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return <h2>Hello from Weather</h2>;
}
