type curWeatherConfig = {
  description: string;
  icon: string;
  id: number;
  main: string;
};

type forecastList = {
  dt: number;
  dt_txt: string;
  rain: { "3h": number };
  snow: { "3h": number };
  weather: curWeatherConfig[];
  main: { temp: number };
};

export type WeatherConfig = {
  name: string;
  weather: curWeatherConfig[];
  main: {
    feels_like: number;
    temp: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: { deg: number; speed: number; gust: number };
  sys: { sunrise: number; sunset: number };
};

export type forecastWeatherConfig = {
  list: forecastList[];
};
