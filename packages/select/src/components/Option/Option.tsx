import type { ComponentType } from 'react';
import React from 'react';
import { OptionProps } from 'react-select';
import { GroupOption, SelectOption } from '../../Select';
import { OptionItem, Title } from './Option.styles';

export const Option: ComponentType<OptionProps<SelectOption, false, GroupOption>> = ({
  data,
  isFocused,
  isSelected,
  selectOption,
}) => {
  return (
    <OptionItem
      onClick={() => selectOption(data)}
      focused={isFocused}
      selected={isSelected}
      type="button"
    >
      <Title>{data.label}</Title>
    </OptionItem>
  );
};