import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';
import { useWeatherWithGeo } from 'shared/lib/hooks/useGeolocation';

type WeatherContextType = {
  unit: 'C' | 'F';
  cityState: string;
  setUnit: Dispatch<SetStateAction<'C' | 'F'>>;
  setCityState: Dispatch<SetStateAction<string>>;
  setCity: Dispatch<SetStateAction<string | null>>;
  geoCity: string | null;
  data: any;
  isLoading: boolean;
  error: string | Error | null;
};

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [unit, setUnit] = useState<'C' | 'F'>('C');
  const { data, isLoading, error, setCity, geoCity } = useWeatherWithGeo();
  const [cityState, setCityState] = useState('');

  return (
    <WeatherContext.Provider
      value={{
        unit,
        cityState,
        setUnit,
        setCityState,
        setCity,
        geoCity,
        data,
        isLoading,
        error,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeather должен использоваться внутри WeatherProvider');
  }
  return context;
};
