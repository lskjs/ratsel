import React from 'react';

import { ThemeProvider } from '../src';

export default {
  title: 'ThemeProvider',
  component: ThemeProvider,
}

export const Default = () => (
  <ThemeProvider>
    <h1>Заголовок</h1>
    <h2>Подзаголовок</h2>
    <button>Просто кнопка</button>
    <br />
    <code>
      Something code
    </code>
  </ThemeProvider>
);
