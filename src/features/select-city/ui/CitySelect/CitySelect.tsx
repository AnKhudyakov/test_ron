import { FC, useState } from 'react';

import { Button } from 'shared/ui/Button';
import { CitySelectForm } from 'shared/ui/CitySelectForm';
import { Typography } from 'shared/ui/Typography';
import { IProps } from './CitySelect.types';
import { ArrowIcon } from 'shared/ui/ArrowIcon/ArrowIcon';
import styles from './CitySelect.module.scss';

export const CitySelect: FC<IProps> = ({
  initCity,
  onCityChange,
  onResetToGeo,
}) => {
  const [isEditing, setIsEditing] = useState(false);

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
        <div className={styles.containter}>
          <Typography variant="title">{initCity}</Typography>
          <div className={styles.buttons}>
            <Button onClick={() => setIsEditing(true)}>Сменить город</Button>
            <Button onClick={onResetToGeo} icon={<ArrowIcon />}>
              Мое местоположение
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
