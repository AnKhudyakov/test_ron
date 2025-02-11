import { FC } from 'react';

import styles from './Button.module.scss';
import { IProps } from './Button.types';
import clsx from 'clsx';

export const Button: FC<IProps> = ({
  onClick,
  children,
  disabled,
  icon,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(styles.button, className)}
    >
      {icon && <span className={styles.icon}>{icon}</span>} {children}
    </button>
  );
};
