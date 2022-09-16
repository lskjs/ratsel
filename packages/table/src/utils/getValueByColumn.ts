import { getField } from 'ka-table/Utils/ColumnUtils';
import { getValueByField } from 'ka-table/Utils/DataUtils';

import { ExtendedColumn } from '../types';

export const getValueByColumn = (rowData: any, column: ExtendedColumn) => {
  const key = getField(column);

  if (column.getComputedValue) {
    return column.getComputedValue(key, rowData);
  }

  return getValueByField(rowData, key);
};
