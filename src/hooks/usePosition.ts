import { SetStateAction, useEffect, useState } from "react";

interface IPosition {
  latitude: number;
  longitude: number;
}

export const usePosition = () => {
  const [position, setPosition] = useState<IPosition | object>({});
  const [error, setError] = useState<string | null>(null);

  const onChange = ({ coords }: { coords: IPosition }) => {
    setPosition({ latitude: coords.latitude, longitude: coords.longitude });
  };

  const onError = (error: { message: SetStateAction<string | null> }) => {
    setError(error.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;

    if (!geo) {
      setError("Геолокация не поддерживается браузером");
      return;
    }

    geo.getCurrentPosition(onChange, onError);
  }, []);

  return { ...position, error };
};
