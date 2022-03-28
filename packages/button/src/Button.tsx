import React from 'react';
import type { FC } from 'react';
import { Base, BaseProps } from './components/Base';
import { useTheme } from '@emotion/react';

export interface ButtonProps extends BaseProps {}

export const Button: FC<ButtonProps> = ({ children, variant }) => {
  const theme = useTheme();
  console.log('theme', theme);
  return (
    <Base variant={variant}>
      {children}
    </Base>
  );
};

export default Button;
