import { ITableProps } from 'ka-table';
import { Column } from 'ka-table/models';
import { filterAndSearchData } from 'ka-table/Utils/FilterUtils';
import { getGroupedData } from 'ka-table/Utils/GroupUtils';
import { isRemoteSorting } from 'ka-table/Utils/SortUtils';
import { getTreeData } from 'ka-table/Utils/TreeUtils';

import { SortingMode } from '../enums';
import { sortData } from './sortData';

export const getDataWithoutPaging = (props: ITableProps) => {
  const {
    columns,
    groups,
    groupsExpanded,
    treeGroupKeyField,
    treeGroupsExpanded,
    rowKeyField,
    sort,
    sortingMode = SortingMode.None,
  } = props;
  const { data = [] } = props;
  let resultData = [...data];
  resultData = filterAndSearchData(props);
  if (!isRemoteSorting(sortingMode)) {
    resultData = sortData(columns, resultData, sort);
  }

  const groupedColumns: Column[] = groups
    ? columns.filter((c) => groups.some((g) => g.columnKey === c.key))
    : [];
  resultData = groups
    ? getGroupedData(resultData, groups, groupedColumns, groupsExpanded)
    : resultData;
  resultData = treeGroupKeyField
    ? getTreeData({
        data: resultData,
        rowKeyField,
        treeGroupKeyField,
        treeGroupsExpanded,
        originalData: data,
      })
    : resultData;

  return resultData;
};
