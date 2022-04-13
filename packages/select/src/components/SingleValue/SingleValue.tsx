import type { FC } from 'react';
import React from 'react';
import { components, SingleValueProps } from 'react-select';

import { GroupOption, SelectOption } from '../../Select';
import { Option, Title } from './SingleValue.styles';

const SingleValue: FC<SingleValueProps<SelectOption, false, GroupOption>> = ({
  data,
  ...props
}) => {
  const SingleValueBase = components.SingleValue as (
    arg: SingleValueProps<SelectOption, false, GroupOption>,
  ) => JSX.Element;
  return (
    <SingleValueBase data={data} {...props}>
      <Option value={data.value}>
        <Title>{data.label}</Title>
      </Option>
    </SingleValueBase>
  );
};

export default SingleValue;
