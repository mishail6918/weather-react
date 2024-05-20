import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import style from "./ForecastSlider.module.css";
import { useWeatherStore } from "../../stores/useWeatherStore";
import { Mousewheel } from "swiper/modules";

export const ForecastSlider = () => {
  const { hourlyWeather } = useWeatherStore();
  const dayNames = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  return (
    <>
      <Swiper
        className={style["forecast-slider"]}
        spaceBetween={30}
        slidesPerView={5}
        modules={[Mousewheel]}
        mousewheel={{ releaseOnEdges: true, enabled: true }}
      >
        {!!hourlyWeather &&
          hourlyWeather.list.map((slide) => (
            <SwiperSlide className={style["forecast-slider__item"]}>
              <div className={style.item__weather}>
                <div className={style.temp}>
                  <h3 className={style.temp__degree}>
                    {Math.round(slide.main.temp)}
                  </h3>
                </div>
                <div className={style.item__image}>
                  <img
                    src={`https://openweathermap.org/img/wn/${slide.weather[0].icon}.png`}
                    alt=""
                  />
                </div>
              </div>
              <small>{dayNames[new Date(slide.dt_txt).getDay()]}</small>
              <div className={style.item__date}>
                <p>{slide.dt_txt.substring(11, 16)}</p>
                <small>{slide.dt_txt.substring(0, 10)}</small>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};
