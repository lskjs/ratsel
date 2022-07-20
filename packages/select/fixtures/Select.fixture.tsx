import React, { useState } from 'react';

import { Select } from '../src';
import { CreatableSelect } from '../src/CreatableSelect';

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

const DemoCreatable = ({ options: _options, onChange }) => (
  <CreatableSelect
    placeholder="Выберите период"
    options={_options}
    isSearchable
    onChange={onChange}
    noOptionsMessage={() => <div>No options!</div>}
  />
);

export default {
  default: (
    <Select
      placeholder="Выберите период"
      options={options}
      isSearchable
      onChange={(val) => console.log(val)}
      noOptionsMessage={() => <div>No options!</div>}
    />
  ),
  creatable: () => {
    const [optionsState, setOptionsState] = useState(options);

    function handleChange(option, { action }) {
      console.log({
        option,
        action,
      });

      if (action === 'create-option') {
        setOptionsState((prev) => [...prev, option]);
      }
    }

    return <DemoCreatable options={optionsState} onChange={handleChange} />;
  },
};
