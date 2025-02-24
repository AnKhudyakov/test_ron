export interface ForcastData {
  dt_txt: string;
  date: string;
  humidity: number;
  pressure: number;
  temp: number;
  weather: { description: string; icon: string; id: number; main: string };
  windDeg: number;
  windSpeed: number;
}
