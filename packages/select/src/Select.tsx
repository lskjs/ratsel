import { ClassNames } from '@ratsel/core';
import React, { forwardRef, ReactNode } from 'react';
import ReactSelect from 'react-select';
import ReactSelectAsync from 'react-select/async';
import { SelectComponents } from 'react-select/dist/declarations/src/components';
import SelectType from 'react-select/dist/declarations/src/Select';
import {
  OptionsOrGroups,
  PropsValue,
} from 'react-select/dist/declarations/src/types';

import DropdownIndicator from './components/DropdownIndicator';
import { Option } from './components/Option';
import SingleValue from './components/SingleValue';
import { Wrapper } from './components/Wrapper';

export interface SelectOption {
  label?: string;
  value?: string | number;
  [key: string]: unknown;
}

export interface GroupOption {
  options: SelectOption[];
}

interface SelectProps {
  options: OptionsOrGroups<SelectOption, GroupOption>;
  value: PropsValue<SelectOption>;
  placeholder?: string;
  isSearchable?: boolean;
  isClearable?: boolean;
  blurInputOnSelect?: boolean;
  onMenuClose?: () => void;
  styles?: Record<string, unknown>;
  className?: string;
  hasError?: boolean;
  onChange?: (value: any) => void | undefined;
  components?: SelectComponents<SelectOption, false, GroupOption>;
  noOptionsMessage: (value: Record<string, unknown>) => ReactNode;
  isDisabled?: boolean;
  isAsync?: boolean;
}

export const Select = forwardRef<
  SelectType<SelectOption, false, GroupOption>,
  SelectProps
>(
  (
    {
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
      isAsync,
      ...props
    },
    ref,
  ) => {
    const ReactSelectComponent = isAsync ? ReactSelectAsync : ReactSelect; 
    return (
      <ClassNames>
        {({ cx }) => (
          <Wrapper>
            <ReactSelectComponent
              ref={ref}
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
  },
);

Select.displayName = 'Select';
