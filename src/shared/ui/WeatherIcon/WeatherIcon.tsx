import { FC } from 'react';

import { StyledIcon } from './WeatherIcon.styles';
import { IProps } from './WeatherIcon.types';

export const WeatherIcon: FC<IProps> = ({ iconCode }) => {
  return (
    <StyledIcon
      src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
      alt="weather"
    />
  );
};
