import { ITableProps } from 'ka-table';
import { getValueByField } from 'ka-table/Utils/DataUtils';

import { getData } from './getData';

export const areAllVisibleRowsSelected = (props: ITableProps) => {
  const { selectedRows = [], rowKeyField } = props;
  return getData(props).every((d: any) => selectedRows.includes(getValueByField(d, rowKeyField)));
};
