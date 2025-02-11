import { FC } from 'react';
import clsx from 'clsx';

import styles from './Typography.module.scss';
import { IProps } from './Typography.types';

export const Typography: FC<IProps> = ({
  variant = 'body',
  className,
  children,
}) => {
  const Tag = variant === 'title' ? 'h1' : 'p';
  return <Tag className={clsx(styles[variant], className)}>{children}</Tag>;
};
