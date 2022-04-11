import React from 'react';

import { Select } from '../src';

const options = [
  {
    value: 'variant1',
    label: 'Вариант 1',
  },
  {
    value: 'variant2',
    label: 'Вариант 2',
  },
  {
    value: 'variant3',
    label: 'Вариант 3',
  },
];

export default <Select options={options} onMenuClose={() => console.log('asd')} isSearchable />;
