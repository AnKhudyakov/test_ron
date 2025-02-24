import { FC } from 'react';

import { LoaderContainer, StyledLoader } from './Loader.styles';

export const Loader: FC<{}> = () => {
  return (
    <LoaderContainer>
      <StyledLoader>Загрузка данных...</StyledLoader>
    </LoaderContainer>
  );
};
