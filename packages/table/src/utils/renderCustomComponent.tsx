/* eslint-disable consistent-return */
import { ICellEditorProps, ICellProps } from 'ka-table/props';
import React, { ComponentType, ReactNode } from 'react';

import { CustomComponentProps } from './deserialize';

export const renderCustomComponent = (
  props: ICellProps | ICellEditorProps,
  componentObject?: CustomComponentProps,
): ReactNode | void => {
  const CustomCell = componentObject?.component as ComponentType<any>;
  const customProps = componentObject?.props;
  if (CustomCell) {
    return <CustomCell custom={customProps} {...props} />;
  }
};
