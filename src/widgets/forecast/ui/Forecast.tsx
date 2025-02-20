import { FC, useEffect } from 'react';
import { useForecast } from 'shared/api/api';
import { useWeatherContext } from 'shared/context/WeatherContext';
import { getWindDirection } from 'shared/lib/helpers';
import { Temperature } from 'shared/ui/Temperature';
import { Typography } from 'shared/ui/Typography';
import { WeatherIcon } from 'shared/ui/WeatherIcon';

import styles from './Forecast.module.scss';

export const Forecast: FC = () => {
  const { unit, data, setCityState, geoCity, cityState } = useWeatherContext();

  const {
    data: forecastData,
    isLoading,
    error,
  } = useForecast(cityState || geoCity);

  useEffect(() => {
    if (!isLoading && data) setCityState(data.name);
  }, [data, isLoading]);

  return (
    <div className={styles.container}>
      <div className={styles.forecastList}>
        {forecastData?.list.map((day: any, index: number) => (
          <div key={index} className={styles.forecastItem}>
            <Typography variant="subtitle">{day.date}</Typography>
            <WeatherIcon iconCode={day.weather[0].icon} />
            <Temperature className={styles.temp} value={day.temp} unit={unit} />
            <Typography variant="body">{day.weather[0].description}</Typography>
            <Typography variant="body">Влажность: {day.humidity}%</Typography>
            <Typography variant="body">
              Давление: {day.pressure} мм рт. ст.
            </Typography>
            <Typography variant="body">
              Ветер: {day.windSpeed} м/с, {getWindDirection(day.windDeg)}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};
