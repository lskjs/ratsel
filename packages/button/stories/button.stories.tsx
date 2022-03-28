import React from 'react';
import { ThemeProvider } from '@ratsel/core';

import { Button } from '../src';

export default {
  title: 'Button',
  component: Button,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};


const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({
  children: 'Кнопка',
});
