import style from "./Main.module.css";
import { useWeatherStore } from "../../stores/useWeatherStore";
import { WeatherMain } from "../../components/WeatherMain/WeatherMain";
import { ForecastSlider } from "../../components/ForecastSlider/ForecastSlider";

export const Main = () => {
  const { currentWeather } = useWeatherStore();

  return (
    <>
      <div className={style.weather}>
        {currentWeather ? (
          <>
            <div className={style.weather__title}>
              <span className={style.weather__city}>{currentWeather.name}</span>
              , погода на сегодня
            </div>
            <div className="weather__content">
              <WeatherMain currentWeather={currentWeather} />
              <ForecastSlider />
            </div>
          </>
        ) : (
          <h2>Произошла ошибка при получении данных о погоде</h2>
        )}
      </div>
    </>
  );
};
