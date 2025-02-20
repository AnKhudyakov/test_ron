import { FC } from 'react';

import styles from './Temperature.module.scss';
import { IProps } from './Temperature.types';
import { convertTemp } from 'shared/lib/helpers';
import clsx from 'clsx';

export const Temperature: FC<IProps> = ({ value, unit, className }) => {
  return (
    <div className={clsx(styles.temperature, className)}>
      {convertTemp(unit, value)}°
    </div>
  );
};
