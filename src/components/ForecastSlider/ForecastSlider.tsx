import { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { useWeatherStore } from "../../stores/useWeatherStore";

export const ForecastSlider = () => {
  const swiperRef = useRef(null);
  const { hourlyWeather } = useWeatherStore();
  console.log(hourlyWeather);
  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        slidesPerView: 3,
        spaceBetween: 20,
      });
    }
  }, []);
  return (
    <>
      {/* <div ref={swiperRef} className="swiper-container">
        <div className="swiper-wrapper">
          {hourlyWeather &&
            hourlyWeather.map((slide, index) => (
              <div key={index} className="swiper-slide">
                {slide.name}
              </div>
            ))}
        </div>
      </div> */}
    </>
  );
};
