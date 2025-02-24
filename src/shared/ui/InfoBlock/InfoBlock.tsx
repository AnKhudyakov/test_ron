import { FC } from 'react';

import { InfoBlockContainer, Label, Value } from './InfoBlock.styles';
import { IProps } from './InfoBlock.types';

export const InfoBlock: FC<IProps> = ({ label, value }) => {
  return (
    <InfoBlockContainer>
      <Label variant="body" className="label">
        {label}
      </Label>
      <Value variant="body" className="value">
        {value}
      </Value>
    </InfoBlockContainer>
  );
};
