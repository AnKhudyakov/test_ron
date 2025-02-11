export const convertTemp = (unit: 'F' | 'C', temp: number) =>
  unit === 'F' ? (temp * 9) / 5 + 32 : temp;

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
