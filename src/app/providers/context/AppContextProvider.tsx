import React, { PropsWithChildren } from 'react';

import { WeatherProvider } from 'shared/context/WeatherContext';

interface IProps extends PropsWithChildren {}

export const AppContextProvider: React.FC<IProps> = ({ children }) => {
  return <WeatherProvider>{children}</WeatherProvider>;
};
