import { useEffect, useState } from 'react';
import { useCity, usePop, useWeather } from 'shared/api/api';

export const useWeatherWithGeo = () => {
  const [city, setCity] = useState<string | null>(null);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [geoError, setGeoError] = useState<string | null>(null);

  const {
    data: geoData,
    error: cityError,
    isLoading: isGeoLoading,
  } = useCity(latitude, longitude);

  const {
    data: popData,
    error: popError,
    isLoading: isPopLoading,
  } = usePop(city);

  const { data, error, isLoading } = useWeather(city);

  useEffect(() => {
    if (!navigator.geolocation) {
      setGeoError('Геолокация не поддерживается вашим браузером');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        setGeoError(`Ошибка геолокации: ${err.message}`);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    );
  }, []);

  useEffect(() => {
    if (geoData && geoData.length > 0) {
      setCity(geoData[0].name);
    } else if (cityError) {
      setGeoError('Не удалось определить город');
    }
  }, [geoData, cityError]);

  return {
    data: popData ? { ...data, pop: popData?.list?.[0].pop } : data,
    isLoading: isGeoLoading || isLoading || isPopLoading,
    error: geoError || cityError || error,
  };
};
