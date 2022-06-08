import { ThemeProvider } from '@ratsel/core';
import type { FC, PropsWithChildren } from 'react';
import React from 'react';

const theme = (parentTheme) => ({
  ...parentTheme,
  ratsel: {
    ...parentTheme.ratsel,
    floating: {
      ...parentTheme.ratsel.floating,
      background: '#fff',
      borderRadius: '6px',
      padding: '8px 0',
      boxShadow: '-8px 12px 50px -3px hsla(146, 38.5%, 69.0%, 0.32)',
      arrowSize: '14px',
    },
  },
});

const Decorator: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Decorator;
