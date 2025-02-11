import React, { useEffect, useState } from 'react';
import { useWeatherWithGeo } from 'shared/lib/hooks/useGeolocation';
import { InfoBlock } from 'shared/ui/InfoBlock';
import { Temperature } from 'shared/ui/Temperature';
import { Typography } from 'shared/ui/Typography';
import { WeatherIcon } from 'shared/ui/WeatherIcon';
import { Loader } from 'shared/ui/Loader';
import { getWindDirection } from '../lib/helpers';
import { ToggleUnits } from 'features/toggleUnits';
import { CitySelect } from 'features/select-city';
import styles from './Weather.module.scss';
import { capitalizeFirstLetter } from 'shared/lib/helpers/helpers';
import { Error } from 'shared/ui/Error';

export const Weather: React.FC<{}> = () => {
  const [unit, setUnit] = useState<'C' | 'F'>('C');
  const { data, isLoading, error, setCity, geoCity } = useWeatherWithGeo();
  const [cityState, setCityState] = useState<string>('');

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

  useEffect(() => {
    if (!isLoading && data) setCityState(data.name);
  }, [data, isLoading]);

  if (error || !data)
    return (
      <Error
        message="Такого города пока не существует"
        onError={handleResetToGeo}
      />
    );
  if (isLoading) return <Loader />;

  return (
    <div className={styles.containter}>
      <div className={styles.block_header}>
        <CitySelect
          initCity={cityState}
          onCityChange={handleCityChange}
          onResetToGeo={handleResetToGeo}
        />
        <ToggleUnits unit={unit} onToggle={handleToggle} />
      </div>
      <div className={styles.block_center}>
        <div className={styles.main_info}>
          <WeatherIcon iconCode={data.weather[0].icon} />
          <Temperature value={data.main.temp} unit={unit} />
        </div>
        <Typography variant="subtitle">
          {capitalizeFirstLetter(data.weather[0].description)}
        </Typography>
      </div>
      <div className={styles.block_footer}>
        <InfoBlock
          label="Скорость ветра"
          value={`${data.wind.speed} м/с, ${getWindDirection(data.wind.deg)}`}
        />
        <InfoBlock
          label="Давление"
          value={`${data.main.pressure} мм рт. ст.`}
        />
        <InfoBlock label="Влажность" value={`${data.main.humidity}%`} />
        <InfoBlock label="Вероятность дождя" value={`${data.pop}%`} />
      </div>
    </div>
  );
};
