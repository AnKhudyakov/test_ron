import { useState } from 'react';
import { Input } from 'shared/ui/Input';

import { Container, StyledSelectButton } from './CitySelectForm.styles';
import { IProps } from './CitySelectForm.types';

export const CitySelectForm: React.FC<IProps> = ({ onSubmit, onCancel }) => {
  const [city, setCity] = useState('');

  return (
    <Container>
      <Input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Введите город"
      />
      <StyledSelectButton onClick={() => onSubmit(city)} disabled={!city}>
        OK
      </StyledSelectButton>
    </Container>
  );
};
