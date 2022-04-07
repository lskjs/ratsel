import type { FC } from 'react';
import React from 'react';
import ReactSelect from 'react-select';
import {
  OptionsOrGroups,
  PropsValue,
} from 'react-select/dist/declarations/src/types';

interface SelectOption {
  label?: string;
  value?: string | number;
  [key: string]: unknown;
}

interface SelectProps {
  options: OptionsOrGroups<SelectOption, { options: SelectOption[] }>;
  value: PropsValue<SelectOption>;
}

export const Select: FC<SelectProps> = ({ options, value }) => (
  <ReactSelect options={options} value={value} />
);
