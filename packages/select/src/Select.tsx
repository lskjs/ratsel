import type { FC } from 'react';
import React, { useState } from 'react';
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

// const NULL_STRING = '@@NULL@@';
// const getReverseOptionValue = (value: string | number) => (value === NULL_STRING ? null : value);
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
  hasError?: boolean,
  onChange?: (value: string | number | null) => void,
  components?: SelectComponents<SelectOption, false, GroupOption>;
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
}) => {
  // const [state, setState] = useState({});
  // function handleChange(option: Object<SelectOption>) {
  //   setState({ option, initOption: false });
  //   const _value = getReverseOptionValue(option && option.value);
  //   if (onChange) onChange(_value);
  // }
  return (
    <ClassNames>
      {({ cx }) => (
        <Wrapper>
          <ReactSelect
            defaultMenuIsOpen
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
            {...props}
            // onChange={handleChange}
          />
        </Wrapper>
      )}
    </ClassNames>
  );
}
