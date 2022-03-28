import React from 'react';
import type { FC } from 'react';

export const Button: FC = ({ children }) => {
  return (
    <button>
      {children}
    </button>
  );
};

export default Button;
