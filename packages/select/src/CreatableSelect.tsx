import { ClassNames } from '@ratsel/core';
import React, { forwardRef } from 'react';
import ReactSelectCreatableAsync from 'react-select/async-creatable';
import ReactSelectCreatable from 'react-select/creatable';
import SelectType from 'react-select/dist/declarations/src/Select';

import DropdownIndicator from './components/DropdownIndicator';
import { Option } from './components/Option';
import SingleValue from './components/SingleValue';
import { Wrapper } from './components/Wrapper';
import { GroupOption, SelectOption, SelectProps } from './Select';

interface SelectCreatableProps extends SelectProps {
  onCreateOption?: (value: any) => void | undefined;
}

export const CreatableSelect = forwardRef<
  SelectType<SelectOption, false, GroupOption>,
  SelectCreatableProps
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
      onCreateOption,
      isAsync,
      ...props
    },
    ref,
  ) => {
    const ReactSelectComponent = isAsync ? ReactSelectCreatableAsync : ReactSelectCreatable;
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
              onCreateOption={onCreateOption}
              {...props}
            />
          </Wrapper>
        )}
      </ClassNames>
    );
  },
);

CreatableSelect.displayName = 'CreatableSelect';
