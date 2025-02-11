import { FC } from 'react';

import styles from './Temperature.module.scss';
import { IProps } from './Temperature.types';

export const Temperature: FC<IProps> = ({ value, unit }) => {
  const convertTemp = (temp: number) => {
    return unit === 'C' ? temp.toFixed() : ((temp * 9) / 5 + 32).toFixed();
  };
  return <div className={styles.temperature}>{convertTemp(value)}°</div>;
};
