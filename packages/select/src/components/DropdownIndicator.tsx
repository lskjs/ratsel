import type { FC } from 'react';
import React from 'react';
import { components, DropdownIndicatorProps } from 'react-select';
import { GroupOption, SelectOption } from '../Select';

const DropdownIndicator: FC<DropdownIndicatorProps<SelectOption, false, GroupOption>> = ({ selectProps, ...props }) => {
  let arrow;
  if (selectProps.menuIsOpen) {
    arrow = (
      <i
        style={{
          border: 'solid #4a4a4a',
          borderWidth: '0 2.5px 2.5px 0',
          display: 'inline-block',
          padding: 2.2,
          transform: 'rotate(-135deg)',
          marginRight: 14,
        }}
      />
    );
  } else {
    arrow = (
      <i
        style={{
          border: 'solid #4a4a4a',
          borderWidth: '0 2.5px 2.5px 0',
          display: 'inline-block',
          padding: 2.2,
          transform: 'rotate(45deg)',
          marginRight: 14,
        }}
      />
    );
  }
  const DropdownIndicatorBase = components.DropdownIndicator as (props: DropdownIndicatorProps<SelectOption, false, GroupOption>) => JSX.Element;
  return <DropdownIndicatorBase selectProps={selectProps} {...props}>{arrow}</DropdownIndicatorBase>;
};

export default DropdownIndicator;
