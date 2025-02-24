import {
  ChangeEventHandler,
  ReactNode
} from 'react';

export interface IProps {
  onSelect: ChangeEventHandler<HTMLSelectElement>;
  value: string;
  options: ReactNode;
}
