import { ThemeProvider } from '@ratsel/core';
import React from 'react';

const theme = (parentTheme) => ({
  ...parentTheme,
});

export default ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
