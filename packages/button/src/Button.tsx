import React from 'react';
import type { FC } from 'react';
import { Base, BaseProps } from './components/Base';
import { Icon } from './components/Icon';

export interface ButtonProps extends BaseProps {
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({ children, variant, bordered, iconLeft, iconRight, disabled }) => {
  return (
    <Base
      variant={variant}
      bordered={bordered}
      iconLeft={iconLeft}
      iconRight={iconRight}
      disabled={disabled}
    >
      {iconLeft && <Icon>{iconLeft}</Icon>}
      {children}
      {iconRight && <Icon>{iconRight}</Icon>}
    </Base>
  );
};

export default Button;
