import { FC } from 'react';

import { StyledSelect } from './Select.styles';
import { IProps } from './Select.types';

export const Select: FC<IProps> = ({ onSelect, value, options }) => {
  return (
    <StyledSelect value={value} onChange={onSelect}>
      {options}
    </StyledSelect>
  );
};
