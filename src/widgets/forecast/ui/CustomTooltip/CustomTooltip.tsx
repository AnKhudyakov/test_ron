import { FC } from 'react';
import { useWeatherContext } from 'shared/context/WeatherContext';
import { Typography } from 'shared/ui/Typography';
import styles from './CustomTooltip.module.scss';

export const CustomTooltip: FC<any> = ({ active, payload }) => {
  const { unit } = useWeatherContext();
  if (!active || !payload || !payload.length) return null;

  const data = payload[0].payload;

  return (
    <div className={styles.tooltip}>
      <Typography>
        <strong>Температура:</strong> {data.temp}
        {unit}
      </Typography>
      <Typography>
        <strong>Влажность:</strong> {data.humidity}%
      </Typography>
      <Typography>
        <strong>Скорость ветра:</strong> {data.windSpeed} м/с
      </Typography>
      <Typography>
        <strong>Давление:</strong> {data.pressure} мм рт. ст.
      </Typography>
    </div>
  );
};
