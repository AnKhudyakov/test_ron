import { FC } from 'react';
import clsx from 'clsx';
import { IProps } from './Typography.types';
import { Body, Title, Subtitle } from './Typography.styles';

export const Typography: FC<IProps> = ({
  variant = 'body',
  className,
  children,
}) => {
  const Tag =
    variant === 'title' ? Title : variant === 'subtitle' ? Subtitle : Body;
  return <Tag className={clsx(className)}>{children}</Tag>;
};
