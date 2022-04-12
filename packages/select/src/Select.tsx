import type { FC, ReactNode } from 'react';
import React from 'react';
import { ClassNames } from '@ratsel/core';
import ReactSelect from 'react-select';
import { SelectComponents } from 'react-select/dist/declarations/src/components';
import {
  OptionsOrGroups,
  PropsValue,
} from 'react-select/dist/declarations/src/types';
import { Wrapper } from './components/Wrapper';
import { Option } from './components/Option';
import SingleValue from './components/SingleValue';
import DropdownIndicator from './components/DropdownIndicator';

export interface SelectOption {
  label?: string;
  value?: string | number;
  [key: string]: unknown;
}

export interface GroupOption {
  options: SelectOption[];
};

interface SelectProps {
  options: OptionsOrGroups<SelectOption, GroupOption>;
  value: PropsValue<SelectOption>;
  placeholder?: string;
  isSearchable?: boolean;
  isClearable?: boolean;
  blurInputOnSelect?: boolean;
  onMenuClose?: () => void;
  styles?: object;
  className?: string;
  hasError?: boolean;
  onChange?: (value: any) => void | undefined;
  components?: SelectComponents<SelectOption, false, GroupOption>;
  noOptionsMessage: (value: object) => ReactNode;
  isDisabled?: boolean;
}

export const Select: FC<SelectProps> = ({
  options,
  value,
  placeholder,
  isSearchable = false,
  isClearable = false,
  blurInputOnSelect = true,
  hasError = false,
  onMenuClose,
  styles = {},
  components,
  className = '',
  onChange,
  ...props
}) => (
  <ClassNames>
    {({ cx }) => (
      <Wrapper>
        <ReactSelect
          options={options}
          value={value}
          placeholder={placeholder}
          isSearchable={isSearchable}
          isClearable={isClearable}
          classNamePrefix="react-select"
          blurInputOnSelect={blurInputOnSelect}
          onMenuClose={onMenuClose}
          styles={{
            singleValue: (base) => ({
              ...base,
              position: 'relative',
              top: 'inherit',
              transform: 'inherit',
              flexWrap: 'nowrap',
            }),
            valueContainer: (base) => ({
              ...base,
              flexWrap: 'nowrap',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }),
            ...styles,
          }}
          components={{
            Option,
            SingleValue,
            DropdownIndicator,
            ...components,
          }}
          className={cx({
            'ratsel-select': true,
            [className]: !!className,
            'has-error': hasError,
          })}
          onChange={onChange}
          {...props}
        />
      </Wrapper>
    )}
  </ClassNames>
);
