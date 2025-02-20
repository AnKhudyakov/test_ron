import { FC, useEffect } from 'react';
import { useWeatherContext } from 'shared/context/WeatherContext';
import { capitalizeFirstLetter, getWindDirection } from 'shared/lib/helpers';
import { InfoBlock } from 'shared/ui/InfoBlock';
import { Temperature } from 'shared/ui/Temperature';
import { Typography } from 'shared/ui/Typography';
import { WeatherIcon } from 'shared/ui/WeatherIcon';
import styles from './Weather.module.scss';

export const Weather: FC<{}> = () => {
  const { unit, data, isLoading, error, setCityState } = useWeatherContext();

  useEffect(() => {
    if (!isLoading && data) setCityState(data.name);
  }, [data, isLoading]);

  return (
    <div className={styles.container}>
      <div className={styles.block_center}>
        <div className={styles.main_info}>
          <WeatherIcon iconCode={data.weather[0].icon} />
          <Temperature value={data.main.temp} unit={unit} />
        </div>
        <Typography variant="subtitle">
          {capitalizeFirstLetter(data.weather[0].description)}
        </Typography>
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
