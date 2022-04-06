/* eslint-disable react/display-name */
import { ThemeProvider } from '@ratsel/core';
import React from 'react';

const theme = (parentTheme) => ({
  ...parentTheme,
  table: {
    borderWidth: '1px',
    borderColor: 'hsl(210, 16.7%, 97.6%)',
    errorColor: 'hsl(358, 75.0%, 59.0%)',
    firstLeftPadding: '24px',
    head: {
      height: '47px',
      padding: '18px 10px',
      lineHeight: '16px',
      fontWeight: 400,
      fontSize: '11px',
      background: 'hsl(138, 62.5%, 96.9%)',
      color: 'hsl(151, 40.2%, 54.1%)',
    },
    body: {
      height: '64px',
      padding: '12px 10px',
      lineHeight: '16px',
      fontWeight: 400,
      fontSize: '11px',
      background: '#ffffff',
      color: 'hsl(206, 5.8%, 52.3%)',
    },
    summary: {
      padding: '12px 10px',
      height: '64px',
      lineHeight: '16px',
      fontWeight: 400,
      fontSize: '11px',
      background: 'hsl(210 16.7% 97.6%)',
      color: 'hsl(206, 5.8%, 52.3%)',
    },
  },
});

export default ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
