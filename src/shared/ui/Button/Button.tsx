import { FC } from 'react';

import { IProps } from './Button.types';
import clsx from 'clsx';
import { StyledButton } from './Button.styles';

export const Button: FC<IProps> = ({
  onClick,
  children,
  disabled,
  icon,
  className,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      className={clsx(className)}
    >
      {icon && <span className="icon">{icon}</span>} {children}
    </StyledButton>
  );
};
