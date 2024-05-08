import { create } from "zustand";
import { WeatherConfig } from "../types/main";

type State = {
  status: "idle" | "loading" | "success" | "error";
  error: object;
  currentWeather: WeatherConfig | null;
  hourlyWeather: WeatherConfig[] | null;
};

type Actions = {
  fetchWeatherInfo: (lat: number, lon: number) => Promise<void>;
  fetchCityWeatherInfo: (city: string) => Promise<void>;
  fetchHourlyWeatherInfo: (lat: number, lon: number) => Promise<void>;
};

const initialState: State = {
  status: "idle",
  error: { message: "" },
  currentWeather: null,
  hourlyWeather: null,
};

export const useWeatherStore = create<State & Actions>((set) => ({
  ...initialState,
  fetchWeatherInfo: async (lat: number, lon: number) => {
    set({ status: "loading" });
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${"ec9cef8eca4cde580ebf4d3fe887ed01"}&lang=ru&units=metric`
      );
      const currentWeather = await response.json();
      set({ status: "success", currentWeather });
    } catch (error) {
      if (error) {
        set({ error: { ...error }, status: "error" });
        return;
      } else {
        set({
          error: {
            message: "Возникла критическая ошибка при загрузке данных о погоде",
          },
          status: "error",
        });
      }
    }
  },
  fetchCityWeatherInfo: async (city: string) => {
    set({ status: "loading" });
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"ec9cef8eca4cde580ebf4d3fe887ed01"}&lang=ru&units=metric`
      );
      const currentWeather = await response.json();
      set({ status: "success", currentWeather });
    } catch (error) {
      if (error) {
        set({ error: { ...error }, status: "error" });
        return;
      } else {
        set({
          error: {
            message: "Возникла критическая ошибка при загрузке данных о погоде",
          },
          status: "error",
        });
      }
    }
  },
  fetchHourlyWeatherInfo: async (lat: number, lon: number) => {
    set({ status: "loading" });
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${"ec9cef8eca4cde580ebf4d3fe887ed01"}&lang=ru&units=metric&`
      );
      const hourlyWeather = await response.json();
      set({ status: "success", hourlyWeather });
    } catch (error) {
      if (error) {
        set({ error: { ...error }, status: "error" });
        return;
      } else {
        set({
          error: {
            message: "Возникла критическая ошибка при загрузке данных о погоде",
          },
          status: "error",
        });
      }
    }
  },
}));
