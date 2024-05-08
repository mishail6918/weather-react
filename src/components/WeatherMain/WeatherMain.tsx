import { FC, useMemo } from "react";
import { WeatherConfig } from "../../types/main";
import style from "./WeatherMain.module.css";

interface WeatherMain {
  currentWeather: WeatherConfig;
}

export const WeatherMain: FC<WeatherMain> = ({ currentWeather }) => {
  const getWindDirection = (degree: number) => {
    const directions = [
      { name: "северный", min: 0, max: 11.25 },
      { name: "северо-северо-восточный", min: 11.25, max: 33.75 },
      { name: "северо-восточный", min: 33.75, max: 56.25 },
      { name: "восточно-северо-восточный", min: 56.25, max: 78.75 },
      { name: "восточный", min: 78.75, max: 101.25 },
      { name: "восточно-юго-восточный", min: 101.25, max: 123.75 },
      { name: "юго-восточный", min: 123.75, max: 146.25 },
      { name: "юго-юго-восточный", min: 146.25, max: 168.75 },
      { name: "южный", min: 168.75, max: 191.25 },
      { name: "юго-юго-западный", min: 191.25, max: 213.75 },
      { name: "юго-западный", min: 213.75, max: 236.25 },
      { name: "западно-юго-западный", min: 236.25, max: 258.75 },
      { name: "западный", min: 258.75, max: 281.25 },
      { name: "западно-северо-западный", min: 281.25, max: 303.75 },
      { name: "северо-западный", min: 303.75, max: 326.25 },
      { name: "северо-северо-западный", min: 326.25, max: 348.75 },
      { name: "северный", min: 348.75, max: 360 },
    ];
    const direction = directions.find(
      (dir) => degree >= dir.min && degree < dir.max
    );

    return direction ? direction.name : "не определено";
  };

  const sunrise = useMemo(() => {
    const timestamp = currentWeather.sys.sunrise;
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return (hours < 10 ? "0" : "") + hours + ":" + minutes;
  }, [currentWeather.sys.sunrise]);

  const sunset = useMemo(() => {
    const timestamp = currentWeather.sys.sunset;
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return (hours < 10 ? "0" : "") + hours + ":" + minutes;
  }, [currentWeather.sys.sunset]);

  const lengthDay = useMemo(() => {
    const timestamp = currentWeather.sys.sunset - currentWeather.sys.sunrise;
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return (hours < 10 ? "0" : "") + hours + ":" + minutes;
  }, [currentWeather.sys.sunrise, currentWeather.sys.sunset]);

  return (
    <>
      <div className={style.main}>
        <div className={style.main__video}>
          <video
            src={`./src/assets/bg-videos/${currentWeather.weather[0].main}.mp4`}
            autoPlay
            loop
            muted
          ></video>
          <div className={style.temp}>
            <h2 className={style.temp__degree}>
              {Math.round(currentWeather.main.temp)}
            </h2>
            <span className={style.temp__desc}>
              {currentWeather.weather[0].description}
            </span>
          </div>
        </div>
        <div className={style.info}>
          <div className={style.info__current}>
            <div className="info__line">
              <div className={style.info__item}>
                <h3>Ветер</h3>
                <span>{currentWeather.wind.speed} м/с</span>
              </div>
              <div className={style.info__item}>
                <h3>Направление</h3>
                <span>{getWindDirection(currentWeather.wind.deg)}</span>
              </div>
            </div>
            <div className="info__line">
              <div className={style.info__item}>
                <h3>Влажность</h3>
                <span>{currentWeather.main.humidity} %</span>
              </div>
              <div className={style.info__item}>
                <h3>Давление</h3>
                <span>
                  {Math.round(currentWeather.main.pressure * 0.750063755419211)}{" "}
                  мм рт. ст.
                </span>
              </div>
            </div>
          </div>
          <div className={`${style.sun}`}>
            <div className={style.sun__block}>
              <div className={style.sun__item}>
                <img src="./src/assets/sunrise.png" alt="" />
                {sunrise}
              </div>
              <div className={`${style.sun__item} ${style["length-day"]}`}>
                Долгота дня: {lengthDay}
              </div>
              <div className={style.sun__item}>
                <img src="./src/assets/sunset.png" alt="" />
                {sunset}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
