import { FC, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowIcon } from 'shared/ui/ArrowIcon/ArrowIcon';
import { Button } from 'shared/ui/Button';
import { CitySelectForm } from 'shared/ui/CitySelectForm';
import { Typography } from 'shared/ui/Typography';
import { ActiveButton, ButtonsRow, Container } from './CitySelect.styles';
import { IProps } from './CitySelect.types';

export const CitySelect: FC<IProps> = ({
  initCity,
  onCityChange,
  onResetToGeo,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {isEditing ? (
        <CitySelectForm
          onSubmit={(city) => {
            onCityChange(city);
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <Container>
          <Typography variant="title">{initCity}</Typography>
          <ButtonsRow>
            <Button onClick={() => setIsEditing(true)}>Сменить город</Button>
            <Button onClick={onResetToGeo} icon={<ArrowIcon />}>
              Мое местоположение
            </Button>
          </ButtonsRow>
          <ButtonsRow>
            <ActiveButton
              $isActive={location.pathname === '/'}
              onClick={() => navigate(`/`)}
            >
              Прогноз на сегодня
            </ActiveButton>
            <ActiveButton
              $isActive={location.pathname === '/forecast'}
              onClick={() => navigate(`/forecast`)}
            >
              Прогноз на 5 дней
            </ActiveButton>
          </ButtonsRow>
        </Container>
      )}
    </>
  );
};
