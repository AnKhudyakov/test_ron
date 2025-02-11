import { ReactNode } from 'react';

export interface IProps {
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
  icon?: ReactNode;
  className?: string;
}
