import { useEffect, useRef } from "react";
import { useWeatherStore } from "../../stores/useWeatherStore";
import style from "./Header.module.css";
import { usePosition } from "../../hooks/usePosition";

export const Header = () => {
  const { fetchCityWeatherInfo, fetchWeatherInfo, fetchHourlyWeatherInfo } =
    useWeatherStore();
  const { latitude, longitude } = usePosition();
  const searchRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (latitude && longitude && !searchRef.current?.value) {
      fetchWeatherInfo(latitude, longitude);
      fetchHourlyWeatherInfo(latitude, longitude);
    }
  }, [fetchHourlyWeatherInfo, fetchWeatherInfo, latitude, longitude]);

  const submitHandler = () => {
    if (searchRef.current) {
      fetchCityWeatherInfo(searchRef.current.value);
    }
  };

  return (
    <>
      <div className={style.header}>
        <div className={`${style["header-wrapper"]} container`}>
          <div className={style.header__logo}>
            <img src="./src/assets/weather.png" alt="" />
            <h1>LocWeather</h1>
          </div>
          <nav className={style.header__nav}></nav>
          <div className={style.header__search}>
            <h3>Узнай погоду в любом месте</h3>
            <input
              type="text"
              placeholder="new york/нью-йорк"
              ref={searchRef}
            />
            <button onClick={() => submitHandler()}>ПОИСК</button>
            <span className={style.msg}></span>
          </div>
        </div>
      </div>
    </>
  );
};
