import { FC } from 'react';

import { Button } from 'shared/ui/Button';
import styles from './Error.module.scss';
import { ArrowIcon } from 'shared/ui/ArrowIcon/ArrowIcon';

export const Error: FC<{ message: string; onError: () => void }> = ({
  message,
  onError,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>{message}</div>
      <Button onClick={onError} icon={<ArrowIcon />}>
        Мое местоположение
      </Button>
    </div>
  );
};
