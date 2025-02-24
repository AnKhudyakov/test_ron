import { FC } from 'react';

import { Container, Part, ToggleButton } from './ToggleUnits.styles';
import { IProps } from './ToggleUnits.types';

export const ToggleUnits: FC<IProps> = ({
  unit,
  onToggle,
  firstValue,
  secondValue,
}) => {
  const isActiveFirst = firstValue === unit;
  const isActiveSecond = secondValue === unit;

  return (
    <Container>
      <ToggleButton onClick={onToggle}>
        <Part isActive={isActiveFirst}>{firstValue}</Part>
        <Part isActive={isActiveSecond}>{secondValue}</Part>
      </ToggleButton>
    </Container>
  );
};
