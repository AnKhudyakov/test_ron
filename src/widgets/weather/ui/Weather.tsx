import React, { useState } from 'react';
import { useWeatherWithGeo } from 'shared/lib/hooks/useGeolocation';
import { InfoBlock } from 'shared/ui/InfoBlock';
import { Temperature } from 'shared/ui/Temperature';
import { Typography } from 'shared/ui/Typography';
import { WeatherIcon } from 'shared/ui/WeatherIcon';
import styles from './Weather.module.scss';
import { Loader } from 'shared/ui/Loader';
import { getWindDirection } from '../lib/helpers';
import { ToggleUnits } from 'features/toggleUnits';

export const Weather: React.FC<{}> = () => {
  const [unit, setUnit] = useState<'C' | 'F'>('C');
  const { data, isLoading, error } = useWeatherWithGeo();

  const handleToggle = () => {
    setUnit((prev: 'C' | 'F') => (prev === 'C' ? 'F' : 'C'));
  };

  if (isLoading || !data) return <Loader />;
  if (error)
    return <Typography variant="body">Ошибка загрузки данных</Typography>;

  return (
    <div className={styles.containter}>
      <div className={styles.block_header}>
        <Typography variant="title">{data.name}</Typography>
        <ToggleUnits unit={unit} onToggle={handleToggle} />
      </div>
      <div className={styles.block_center}>
        <WeatherIcon iconCode={data.weather[0].icon} />
        <Temperature value={data.main.temp} unit={unit} />
      </div>
      <div className={styles.block_footer}>
        <InfoBlock
          label="Скорость ветра"
          value={`${data.wind.speed} м/с, ${getWindDirection(data.wind.deg)}`}
        />
        <InfoBlock
          label="Давление"
          value={`${data.main.pressure} мм рт. ст.`}
        />
        <InfoBlock label="Влажность" value={`${data.main.humidity}%`} />
        <InfoBlock label="Вероятность дождя" value={`${data.pop}%`} />
      </div>
    </div>
  );
};
