import { Column } from 'ka-table/models';

import { getValueByColumn } from './getValueByColumn';

export const descendSort = (sortedColumn: Column) => (a: any, b: any) => {
  const aValue = getValueByColumn(a, sortedColumn);
  const bValue = getValueByColumn(b, sortedColumn);
  if (aValue === bValue) {
    return 0;
  }
  if (aValue == null) {
    return 1;
  }
  if (bValue == null) {
    return -1;
  }
  return aValue > bValue ? -1 : 1;
};
