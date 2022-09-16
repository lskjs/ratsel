import { Column } from 'ka-table/models';

export interface ExtendedColumn extends Column {
  getComputedValue?: (key: string, rowData: any) => any;
}

export type ExtendedSortFunc = (props: {
  column: ExtendedColumn;
  data?: any;
}) => ((value1: any, value2: any) => 0 | 1 | -1) | void;
