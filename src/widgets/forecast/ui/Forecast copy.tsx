import { ToggleUnits } from 'features/toggleUnits';
import { FC, useEffect, useState } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { useForecast } from 'shared/api/api';
import { useWeatherContext } from 'shared/context/WeatherContext';
import { convertTemp } from 'shared/lib/helpers';
import { Error } from 'shared/ui/Error';
import { Loader } from 'shared/ui/Loader';
import { Select } from 'shared/ui/Select';
import { Container, Options } from './Forecast.styles';
import { ForcastData } from './Forecast.types';

const METRICS = {
  temp: 'Температура (°C / F)',
  pressure: 'Давление (мм рт. ст.)',
  humidity: 'Влажность (%)',
  windSpeed: 'Скорость ветра (м/с)',
};

export const Forecast: FC = () => {
  const [selectedMetric, setSelectedMetric] =
    useState<keyof typeof METRICS>('temp');
  const [granularity, setGranularity] = useState<'3h' | 'day'>('3h');

  const { unit, data, setCityState, geoCity, cityState, setCity } =
    useWeatherContext();
  const {
    data: forecastData,
    isLoading,
    error,
  } = useForecast(cityState || geoCity);

  useEffect(() => {
    if (!isLoading && data) setCityState(data.name);
  }, [data, isLoading]);

  const handleResetToGeo = () => {
    if (!geoCity) return;
    setCityState(geoCity);
    setCity(geoCity);
  };

  if ((error || !forecastData) && !isLoading) {
    return (
      <Error message="Ошибка загрузки прогноза" onError={handleResetToGeo} />
    );
  }

  if (isLoading) {
    return <Loader />;
  }

  const processData = () => {
    if (granularity === 'day') {
      return forecastData?.list.filter((item: ForcastData) =>
        item.dt_txt.includes('12:00:00')
      );
    }
    return forecastData?.list.filter(
      (_: ForcastData, index: number) => index < 29
    );
  };

  const chartData = processData().map((d: ForcastData) => ({
    ...d,
    temp: convertTemp(unit, d.temp),
  })) as ForcastData[];

  const minValue = Math.floor(
    Math.min(...chartData.map((d) => d[selectedMetric]))
  );
  const maxValue = Math.ceil(
    Math.max(...chartData.map((d) => d[selectedMetric]))
  );

  return (
    <Container>
      <Options>
        <Select
          value={selectedMetric}
          onSelect={(e) =>
            setSelectedMetric(e.target.value as keyof typeof METRICS)
          }
          options={Object.entries(METRICS).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        />
        <ToggleUnits
          unit={granularity}
          onToggle={() => setGranularity(granularity === '3h' ? 'day' : '3h')}
          firstValue="3h"
          secondValue="day"
        />
      </Options>

      <ResponsiveContainer width="100%">
        <AreaChart
          data={chartData}
          margin={{ top: 20, right: 30, left: -10, bottom: 20 }}
        >
          <defs>
            <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff7300" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ff7300" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey={granularity === '3h' ? 'dt_txt' : 'date'}
            stroke="#666"
            interval={0}
          />
          <YAxis
            domain={[minValue, maxValue]}
            tickCount={maxValue - minValue + 1}
            stroke="#666"
            allowDecimals={false}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey={selectedMetric}
            stroke="#ff7300"
            fill="url(#colorTemp)"
            strokeWidth={3}
            dot={{ r: 6, fill: '#ff7300', stroke: '#fff', strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Container>
  );
};
