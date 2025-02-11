import { ReactNode } from 'react';

export interface IProps {
  variant?: 'body' | 'title';
  className?: string;
  children: ReactNode;
}
