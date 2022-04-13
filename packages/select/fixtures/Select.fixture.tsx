import React from 'react';

import { Select } from '../src';

const options = [
  {
    value: '30days',
    label: '30 дней',
  },
  {
    value: '90days',
    label: '90 дней',
  },
  {
    value: '1year',
    label: '1 год',
  },
];

export default (
  <Select
    placeholder="Выберите период"
    options={options}
    isSearchable
    onChange={(val) => console.log(val)}
    noOptionsMessage={() => <div>No options!</div>}
  />
);
