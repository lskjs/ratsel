import type { FC } from 'react';
import React from 'react';
import { components, DropdownIndicatorProps } from 'react-select';

import { GroupOption, SelectOption } from '../Select';

const DropdownIndicator: FC<DropdownIndicatorProps<SelectOption, false, GroupOption>> = ({
  selectProps,
  ...props
}) => {
  const DropdownIndicatorBase = components.DropdownIndicator as (
    arg: DropdownIndicatorProps<SelectOption, false, GroupOption>,
  ) => JSX.Element;
  return (
    <DropdownIndicatorBase selectProps={selectProps} {...props}>
      <svg viewBox="0 0 24 24" width="24" height="24">
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h24v24H0z" />
          <path fill="currentColor" d="M7 10l5 5 5-5z" />
        </g>
      </svg>
    </DropdownIndicatorBase>
  );
};

export default DropdownIndicator;
