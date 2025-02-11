import { useState } from 'react';
import { IProps } from './CitySelectForm.types';
import { Input } from 'shared/ui/Input';
import { Button } from 'shared/ui/Button';
import styles from './CitySelectForm.module.scss';

export const CitySelectForm: React.FC<IProps> = ({ onSubmit, onCancel }) => {
  const [city, setCity] = useState('');

  return (
    <div className={styles.containter}>
      <Input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Введите город"
      />
      <Button
        onClick={() => onSubmit(city)}
        disabled={!city}
        className={styles.submit}
      >
        OK
      </Button>
    </div>
  );
};
