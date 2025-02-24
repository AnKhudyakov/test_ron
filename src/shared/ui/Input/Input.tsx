import { FC } from 'react';

import styles from './Input.module.scss';
import { IProps } from './Input.types';
import { StyledInput } from './Input.styles';

export const Input: FC<IProps> = ({ value, onChange, placeholder }) => {
  return (
    <StyledInput
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
