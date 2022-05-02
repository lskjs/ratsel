import { ThemeProvider } from '@ratsel/core';
import type { FC } from 'react';
import React from 'react';

import { GlobalModalProvider } from '../src/Global';

const theme = (parentTheme) => ({
  ...parentTheme,
  ratsel: {
    ...parentTheme.ratsel,
    modal: {
      ...parentTheme.ratsel.modal,
      borderRadius: '8px',
      background: '#ffffff',
      boxShadow: '0 2px 18px rgba(0, 0, 0, 0.2)',
      content: {
        color: 'hsl(110, 25%, 9%)',
        fontSize: '14px',
        fontWeight: '400',
      },
      description: {
        color: 'hsl(206, 5.8%, 52.3%)',
        fontSize: '14px',
        fontWeight: '400',
      },
      footer: {
        color: 'hsl(110, 25%, 9%)',
      },
      help: {
        color: 'hsl(110, 25%, 9%)',
        background: 'hsl(120, 7%, 89%)',
        fontSize: '14px',
        fontWeight: '400',
      },
      image: {
        background: 'hsl(120, 7%, 89%)',
      },
      subtitle: {
        color: 'hsl(110, 25%, 9%)',
        fontSize: '14px',
        fontWeight: '600',
      },
      title: {
        background: '#ffffff',
        height: '56px',
        color: 'hsl(110, 25%, 9%)',
        fontSize: '18px',
        fontWeight: '500',
        borderColor: 'hsl(120, 7%, 89%)',
      },
    },
  },
});

const Decorator: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalModalProvider>{children}</GlobalModalProvider>
  </ThemeProvider>
);

export default Decorator;
