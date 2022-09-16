import { ITableProps } from 'ka-table';
import { ISummaryCellProps } from 'ka-table/props';
import { PropsWithChildren } from 'react';

import { ExtendedITableProps } from '../Table';
import { defaults } from './defaults';

interface StickyProps {
  left?: string[];
  right?: string[];
  summaryRow?: boolean;
}

export interface ISummaryCustomCellProps extends ISummaryCellProps {
  tableProps: ITableProps;
}

export interface CustomComponentProps {
  component: any;
  props?: {
    [key: string]: any;
  };
}

interface CustomComponentsProps {
  [key: string]: CustomComponentProps;
}

interface CustomProps {
  sticky?: StickyProps;
  cellViewComponents?: CustomComponentsProps;
  cellEditorComponents?: CustomComponentsProps;
  cellTotalComponent?: (arg: PropsWithChildren<ISummaryCellProps>) => any;
  cellTotal?: CustomComponentProps;
  tableWrapper?: CustomComponentProps;
  rootDiv?: CustomComponentProps;
}

interface ExtendedTableProps extends ExtendedITableProps {
  custom?: CustomProps;
}

export interface DeserializeReturn {
  tableProps: ExtendedITableProps;
  custom?: CustomProps;
}

export const deserialize = (
  tableProps: ExtendedTableProps,
): DeserializeReturn => {
  const data = {
    ...defaults,
    ...tableProps,
  };

  const output = {
    tableProps: data,
    custom: data.custom,
  };

  output.tableProps.columns = output.tableProps.columns.map((column) => {
    const _col = column;
    if (typeof column.isEditable !== 'boolean') {
      _col.isEditable = false;
    }
    return column;
  });

  delete output.tableProps.custom;

  return output;
};
