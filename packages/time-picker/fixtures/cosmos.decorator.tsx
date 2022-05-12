import { ThemeProvider } from '@ratsel/core';
import type { FC } from 'react';
import React from 'react';

const theme = (parentTheme) => ({
  ...parentTheme,
  ratsel: {
    ...parentTheme.ratsel,
    timePicker: {
      ...parentTheme.ratsel.timePicker,
      base: {
        borderColor: 'hsl(210, 16.7%, 97.6%)',
        height: '48px',
        padding: '12px',
        borderRadius: '8px',
        background: '#ffffff',
        gap: '6px',
      },
      input: {
        color: 'hsl(110, 25%, 9%)',
        errorColor: 'hsl(358, 75.0%, 59.0%)',
        fontWeight: '400',
        fontSize: '13px',
      },
      icon: {
        color: 'hsl(206, 5.8%, 52.3%)',
      },
      popup: {
        zIndex: '1070',
        boxShadow: '-8px 12px 50px -3px hsla(146, 38.5%, 69.0%, 0.32)',
        background: '#ffffff',
        fontSize: '13px',
        fontWeight: '400',
        fontActiveWeight: '500',
        selectPadding: '0 12px',
        selectColor: 'hsl(110, 25%, 9%)',
        selectHoverBackground: 'hsl(140, 48.7%, 91.0%)',
        selectActiveBackground: 'hsl(151, 49.3%, 46.5%)',
        selectDisabledColor: 'hsl(0, 0%, 90.9%)',
        selectHeight: '26px',
      },
    },
  },
});

const Decorator: FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Decorator;
