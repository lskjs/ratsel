import { ITableProps } from 'ka-table';
import { Column } from 'ka-table/models';

import { getData } from './getData';

export const prepareTableOptions = (props: ITableProps) => {
  const { groups } = props;
  let { columns } = props;
  const groupedData = getData(props);
  let groupColumnsCount = 0;
  let groupedColumns: Column[] = [];
  if (groups) {
    groupColumnsCount = groups.length;
    groupedColumns = columns.filter((c) => groups.some((g) => g.columnKey === c.key));
    columns = columns.filter((c) => !groups.some((g) => g.columnKey === c.key));
  }
  columns = columns.filter((c) => c.visible !== false);

  return {
    columns,
    groupColumnsCount,
    groupedColumns,
    groupedData,
  };
};
