import { Column } from 'ka-table/models';

import { SortDirection } from '../enums';
import { ExtendedSortFunc } from '../types';
import { ascendSort } from './ascendSort';
import { descendSort } from './descendSort';
import { getValueByColumn } from './getValueByColumn';

export const sortData = (columns: Column[], data: any, sort?: ExtendedSortFunc): any[] => {
  const column = columns.find((c) => c.sortDirection);
  if (!column) {
    return data;
  }
  const customSort = sort && sort({ column, data });
  const sortFunc =
    (customSort &&
      ((rowDataA: any, rowDataB: any) =>
        customSort(getValueByColumn(rowDataA, column), getValueByColumn(rowDataB, column)))) ||
    (column.sortDirection === SortDirection.Ascend ? ascendSort(column) : descendSort(column));
  const newData = [...data].sort(sortFunc);
  return newData;
};
