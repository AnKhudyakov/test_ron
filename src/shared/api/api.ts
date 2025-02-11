import { useQuery } from '@tanstack/react-query';
import { config } from 'shared/config';

const fetchWeather = async (city: string | null) => {
  const response = await fetch(
    `${config.backendUrl}data/2.5/weather?q=${city}&units=metric&appid=${config.apiKey}`
  );
  if (!response.ok) throw new Error('Ошибка загрузки данных');
  return response.json();
};

const fetchCityData = async (
  latitude: number | null,
  longitude: number | null
) => {
  const response = await fetch(
    `${config.backendUrl}geo/1.0/reverse?lat=${latitude}&lon=${longitude}&lang=ru&limit=1&appid=${config.apiKey}`
  );
  if (!response.ok) throw new Error('Ошибка загрузки данных');
  return response.json();
};

const fetchPop = async (city: string | null) => {
  const response = await fetch(
    `${config.backendUrl}data/2.5/forecast?q=${city}&appid=${config.apiKey}`
  );
  if (!response.ok) throw new Error('Ошибка загрузки данных');
  return response.json();
};

export const useWeather = (city: string | null) => {
  return useQuery({
    queryKey: ['weather', city],
    queryFn: () => fetchWeather(city),
    enabled: city !== null,
    staleTime: 5 * 60 * 1000,
  });
};

export const useCity = (latitude: number | null, longitude: number | null) => {
  return useQuery({
    queryKey: ['city', latitude, longitude],
    queryFn: () => fetchCityData(latitude, longitude),
    enabled: latitude !== null && longitude !== null,
    staleTime: 5 * 60 * 1000,
  });
};

export const usePop = (city: string | null) => {
  return useQuery({
    queryKey: ['pop', city],
    queryFn: () => fetchPop(city),
    enabled: city !== null,
    staleTime: 5 * 60 * 1000,
  });
};
