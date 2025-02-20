export const capitalizeFirstLetter = (text: string): string => {
  return text ? text.charAt(0).toUpperCase() + text.slice(1) : '';
};

export const convertTemp = (unit: 'F' | 'C', temp: number) =>
  unit === 'C' ? temp.toFixed() : ((temp * 9) / 5 + 32).toFixed();

export function getWindDirection(deg: number): string {
  const directions = [
    'Северный',
    'Северо-восточный',
    'Восточный',
    'Юго-восточный',
    'Южный',
    'Юго-западный',
    'Западный',
    'Северо-западный',
  ];

  const index = Math.round(deg / 45) % 8;
  return directions[index];
}
