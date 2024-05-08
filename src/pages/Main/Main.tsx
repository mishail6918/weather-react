import style from "./Main.module.css";
import { useWeatherStore } from "../../stores/useWeatherStore";
import { useEffect } from "react";
import { WeatherMain } from "../../components/WeatherMain/WeatherMain";

export const Main = () => {
  const { currentWeather } = useWeatherStore();

  useEffect(() => {
    console.log(currentWeather);
  }, [currentWeather]);

  return (
    <>
      <div className={style.weather}>
        {currentWeather && (
          <>
            <div className={style.weather__title}>
              <span className={style.weather__city}>{currentWeather.name}</span>
              , погода на сегодня
            </div>
            <div className="weather__content">
              <WeatherMain currentWeather={currentWeather} />
            </div>
          </>
        )}
      </div>
    </>
  );
};
