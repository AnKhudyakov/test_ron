import { FC } from 'react';

import styles from './Input.module.scss';
import { IProps } from './Input.types';

export const Input: FC<IProps> = ({ value, onChange, placeholder }) => {
  return (
    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
