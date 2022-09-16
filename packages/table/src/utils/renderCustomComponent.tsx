/* eslint-disable consistent-return */
import { ITableAllProps } from 'ka-table';
import { ICellEditorProps, ICellProps } from 'ka-table/props';
import React, { ComponentType, ReactNode } from 'react';

import { CustomComponentProps, ISummaryCustomCellProps } from './deserialize';

export const renderCustomComponent = (
  props:
    | ICellProps
    | ICellEditorProps
    | ISummaryCustomCellProps
    | ITableAllProps,
  componentObject?: CustomComponentProps,
): ReactNode | void => {
  const CustomCell = componentObject?.component as ComponentType<any>;
  const customProps = componentObject?.props;
  if (CustomCell) {
    return <CustomCell custom={customProps} {...props} />;
  }
};
