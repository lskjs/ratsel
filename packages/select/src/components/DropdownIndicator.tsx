import type { FC } from 'react';
import React from 'react';
import { components, DropdownIndicatorProps } from 'react-select';
import { GroupOption, SelectOption } from '../Select';

const DropdownIndicator: FC<DropdownIndicatorProps<SelectOption, false, GroupOption>> = ({ selectProps, ...props }) => {
  let arrow;
  if (selectProps.menuIsOpen) {
    arrow = (
      <svg viewBox="0 0 24 24" width="24" height="24" style={{ transform: 'rotate(180deg)' }}>
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h24v24H0z"/>
          <path fill="#7070ff" d="M7 10l5 5 5-5z"/>
        </g>
      </svg>
    );
  } else {
    arrow = (
      <svg viewBox="0 0 24 24" width="24" height="24">
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h24v24H0z"/>
          <path fill="#4a4a4a" d="M7 10l5 5 5-5z"/>
        </g>
      </svg>
    );
  }
  const DropdownIndicatorBase = components.DropdownIndicator as (props: DropdownIndicatorProps<SelectOption, false, GroupOption>) => JSX.Element;
  return (
    <DropdownIndicatorBase selectProps={selectProps} {...props}>
      {arrow}
    </DropdownIndicatorBase>
  );
};

export default DropdownIndicator;
