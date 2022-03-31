import React from 'react';
import type { FC, ReactNode } from 'react';
import { Base, BaseProps } from './components/Base';
import { Icon } from './components/Icon';

export interface ButtonProps extends BaseProps {
  disabled?: boolean;
  icon?: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant,
  bordered,
  iconLeft,
  iconRight,
  icon,
  disabled,
}) => {
  return (
    <Base
      variant={variant}
      bordered={bordered}
      iconLeft={icon || iconLeft}
      iconRight={icon || iconRight}
      disabled={disabled}
    >
      {iconLeft && <Icon>{iconLeft}</Icon>}
      {!icon ? children : <Icon>{icon}</Icon>}
      {iconRight && <Icon>{iconRight}</Icon>}
    </Base>
  );
};

export default Button;
