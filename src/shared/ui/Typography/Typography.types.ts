import { ReactNode } from 'react';

export interface IProps {
  variant?: 'body' | 'title' | 'subtitle';
  className?: string;
  children: ReactNode;
}
