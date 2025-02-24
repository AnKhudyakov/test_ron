import { FC } from 'react';

import styles from './Select.module.scss';
import { IProps } from './Select.types';

export const Select: FC<IProps> = ({ onSelect, value, options }) => {
  return (
    <select value={value} onChange={onSelect} className={styles.select}>
      {options}
    </select>
  );
};
