import { useEffect, useState } from "react";
import WeatherForecast from "./component/WeatherForecast";
import "./App.scss";

const App = () => {
  const [location, setLocation] = useState("Bursa");
  const [weatherInfo, setWeatherInfo] = useState({});
  const [city, setCity] = useState("");

  const params = {
    key: "45277b67ba8046cf80f170411210803",
    location,
  };

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${params.key}&q=${params.location}&days=3`
    )
      .then((response) => response.json())
      .then((data) => setWeatherInfo(data));
  }, [location]);

  return (
    <div className="weather-wrapper">
      <div>
        <input
          placeholder="Enter a city..."
          onKeyDown={(event) =>
            event.keyCode === 13 ? setLocation(city) : null
          }
          onChange={(event) => setCity(event.target.value)}
          onBlur={() => setLocation(city)}
        />
        <button className="btn" onClick={() => setLocation(city)}>
          Search
        </button>
      </div>

      <div className="weather-card">
        {weatherInfo.current && (
          <>
            <img
              className="weather-icon"
              src={weatherInfo.current.condition.icon}
              alt={"icon"}
            />
            <h1>{weatherInfo.current.temp_c}°</h1>
            <p>
              {weatherInfo.location.name} -{" "}
              <span>{weatherInfo.current.condition.text}</span>
            </p>
          </>
        )}
      </div>
      <div
        className="weather-card"
        style={{ height: "300px", display: "flex", justifyContent: "center" }}
      >
        {weatherInfo.current && (
          <>
            <WeatherForecast
              date={weatherInfo.forecast.forecastday[0].date}
              text={weatherInfo.forecast.forecastday[0].day.condition.text}
              mintemp={weatherInfo.forecast.forecastday[0].day.mintemp_c}
              maxtemp={weatherInfo.forecast.forecastday[0].day.maxtemp_c}
              icon={weatherInfo.forecast.forecastday[0].day.condition.icon}
            />
            <WeatherForecast
              date={weatherInfo.forecast.forecastday[1].date}
              text={weatherInfo.forecast.forecastday[1].day.condition.text}
              mintemp={weatherInfo.forecast.forecastday[1].day.mintemp_c}
              maxtemp={weatherInfo.forecast.forecastday[1].day.maxtemp_c}
              icon={weatherInfo.forecast.forecastday[1].day.condition.icon}
            />
            <WeatherForecast
              date={weatherInfo.forecast.forecastday[2].date}
              text={weatherInfo.forecast.forecastday[2].day.condition.text}
              mintemp={weatherInfo.forecast.forecastday[2].day.mintemp_c}
              maxtemp={weatherInfo.forecast.forecastday[2].day.maxtemp_c}
              icon={weatherInfo.forecast.forecastday[2].day.condition.icon}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
