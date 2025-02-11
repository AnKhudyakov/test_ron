export interface IProps {
  initCity: string;
  onCityChange: (city: string) => void;
  onResetToGeo: () => void;
}
