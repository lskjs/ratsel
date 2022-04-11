import type { FC } from 'react';
import React from 'react';
import { GroupOption, SelectOption } from '../../Select';
import { components, SingleValueProps } from 'react-select';

import { Option, Title } from './SingleValue.styles';

const SingleValue: FC<SingleValueProps<SelectOption, false, GroupOption>> = ({ data, ...props }) => {
  const SingleValueBase = components.SingleValue as (props: SingleValueProps<SelectOption, false, GroupOption>) => JSX.Element;
  return (
    <SingleValueBase data={data} {...props}>
      <Option value={data.value}>
        <Title>{data.label}</Title>
      </Option>
    </SingleValueBase>
  );
};

export default SingleValue;
