import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  return (
    <ReactAnimatedWeather icon="SNOW" color="gray" size={85} animate={true} />
  );
}
