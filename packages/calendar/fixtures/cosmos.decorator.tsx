import { ThemeProvider } from '@ratsel/core';
import type { FC, PropsWithChildren } from 'react';
import React from 'react';

const theme = (parentTheme) => ({
  ...parentTheme,
  ratsel: {
    ...parentTheme.ratsel,
    calendar: {
      ...parentTheme.ratsel.calendar,
      wrapper: {
        padding: '16px 12px 8px',
        smallPadding: '12px 8px 8px',
      },
      navigation: {
        height: '32px',
        smallHeight: '24px',
        margin: '0 0 16px',
        smallMargin: '0',
        fontSize: '13px',
        smallFontSize: '9px',
        fontWeight: '600',
      },
      weekdays: {
        height: '32px',
        smallHeight: '24px',
        weekdayPadding: '6px 0',
        fontSize: '13px',
        smallFontSize: '10px',
        fontWeight: '400',
      },
      tile: {
        fontSize: '13px',
        smallFontSize: '10px',
        fontWeight: '500',
        borderRadius: '4px',
      },
      colors: {
        primary: 'hsl(151, 49.3%, 46.5%)',
        navArrows: 'hsl(151, 49.3%, 46.5%)',
        navYearArrows: 'hsl(146, 38.5%, 69.0%)',
        leftover: 'hsl(0, 0%, 90.9%)',
        main: 'hsl(110, 25%, 9%)',
        gray: 'hsl(0, 0%, 85.8%)',
        background: '#ffffff',
        hoverBackground: 'hsl(0, 0%, 97.3%)',
        tileHighlight: 'hsl(140, 48.7%, 91.0%)',
        hoverHighlight: 'hsl(141, 43.7%, 86.0%)',
      },
    },
  },
});

const Decorator: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Decorator;
