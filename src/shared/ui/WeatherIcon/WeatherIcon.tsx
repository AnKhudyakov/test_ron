import { FC } from 'react';

import styles from './WeatherIcon.module.scss';
import { IProps } from './WeatherIcon.types';

export const WeatherIcon: FC<IProps> = ({ iconCode }) => {
  return (
    <img
      className={styles.icon}
      src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
      alt="weather"
    />
  );
};
