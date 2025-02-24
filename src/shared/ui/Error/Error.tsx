import { FC } from 'react';

import { Button } from 'shared/ui/Button';
import styles from './Error.module.scss';
import { ArrowIcon } from 'shared/ui/ArrowIcon/ArrowIcon';
import { Container } from './Error.styles';

export const Error: FC<{ message: string; onError: () => void }> = ({
  message,
  onError,
}) => {
  return (
    <Container>
      <div>{message}</div>
      <Button onClick={onError} icon={<ArrowIcon />}>
        Мое местоположение
      </Button>
    </Container>
  );
};
