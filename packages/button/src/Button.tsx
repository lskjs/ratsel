import React from 'react';
import type { FC } from 'react';
import { Base, BaseProps } from './components/Base';

export interface ButtonProps extends BaseProps {}

export const Button: FC<ButtonProps> = ({ children, variant }) => {
  return (
    <Base variant={variant}>
      {children}
    </Base>
  );
};

export default Button;
