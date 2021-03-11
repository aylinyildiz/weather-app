import React from "react";

import "./WeatherForecast.scss";

let WeatherForecast = ({ date, text, mintemp, maxtemp, icon }) => {
  return (
    <div className="weather-container">
      <h5>{date}</h5>
      <ul>
        <li>
          <img className="weather-icon-2" src={icon} alt="" />
        </li>
        <li className="text">{text}</li>
        <li className="max-temp"> {maxtemp} °</li>
        <li className="min-temp">min temp: {mintemp} ° </li>
      </ul>
    </div>
  );
};

export default WeatherForecast;
