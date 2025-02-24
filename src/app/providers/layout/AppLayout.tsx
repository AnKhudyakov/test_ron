import { Outlet } from 'react-router-dom';

import styles from './AppLayout.module.scss';
import { CitySelect } from 'features/select-city';
import { ToggleUnits } from 'features/toggleUnits';
import { FC } from 'react';
import { useWeatherContext } from 'shared/context/WeatherContext';
import { Loader } from 'shared/ui/Loader';
import { Error } from 'shared/ui/Error';

interface IProps {}

export const AppLayout: FC<IProps> = () => {
  const {
    unit,
    data,
    isLoading,
    error,
    cityState,
    setUnit,
    setCityState,
    setCity,
    geoCity,
  } = useWeatherContext();

  const handleToggle = () => {
    setUnit((prev: 'C' | 'F') => (prev === 'C' ? 'F' : 'C'));
  };

  const handleCityChange = (newCity: string) => {
    setCityState(newCity);
    setCity(newCity);
  };

  const handleResetToGeo = () => {
    if (!geoCity) return;
    setCityState(geoCity);
    setCity(geoCity);
  };

  if (error)
    return (
      <Error
        message="Такого города пока не существует"
        onError={handleResetToGeo}
      />
    );

  if (isLoading || !data) return <Loader />;

  return (
    <div className={styles.layout}>
      <header>
        <div className={styles.layoutHeader}>
          <CitySelect
            initCity={cityState}
            onCityChange={handleCityChange}
            onResetToGeo={handleResetToGeo}
          />
          <ToggleUnits
            unit={unit}
            onToggle={handleToggle}
            firstValue="C"
            secondValue="F"
          />
        </div>
      </header>
      <div className={styles.layoutBody}>
        <main className={styles.layoutMain}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
