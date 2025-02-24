import { FC } from 'react';

import clsx from 'clsx';
import { convertTemp } from 'shared/lib/helpers';
import { StyledTemperature } from './Temperature.styled';
import { IProps } from './Temperature.types';

export const Temperature: FC<IProps> = ({ value, unit, className }) => {
  return (
    <StyledTemperature className={clsx(className)}>
      {convertTemp(unit, value)}°
    </StyledTemperature>
  );
};
