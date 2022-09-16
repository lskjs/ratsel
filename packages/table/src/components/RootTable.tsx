import Loading from 'ka-table/Components/Loading/Loading';
import Popup from 'ka-table/Components/Popup/Popup';
import { TablePaging } from 'ka-table/Components/TablePaging/TablePaging';
import {
  EditingMode,
  FilteringMode,
  PagingPosition,
  SortingMode,
} from 'ka-table/enums';
import { EditableCell, PagingOptions } from 'ka-table/models';
import { ChildComponents } from 'ka-table/Models/ChildComponents';
import { Column } from 'ka-table/Models/Column';
import { Focused } from 'ka-table/Models/Focused';
import { Group } from 'ka-table/Models/Group';
import { GroupedColumn } from 'ka-table/Models/GroupedColumn';
import { VirtualScrolling } from 'ka-table/Models/VirtualScrolling';
import {
  DispatchFunc,
  FilterFunc,
  FormatFunc,
  SearchFunc,
  SortFunc,
  ValidationFunc,
} from 'ka-table/types';
import { isPagingShown } from 'ka-table/Utils/PagingUtils';
import * as React from 'react';

import { ILoadingProps } from '../props';
import { TableWrapper } from './TableWrapper';

export interface ITableProps {
  columnReordering?: boolean;
  columnResizing?: boolean;
  columns: Column[];
  groupedColumns?: GroupedColumn[];
  data?: any[];
  detailsRows?: any[];
  editableCells?: EditableCell[];
  editingMode?: EditingMode;
  extendedFilter?: (data: any[]) => any[];
  filter?: FilterFunc;
  filteringMode?: FilteringMode;
  focused?: Focused;
  format?: FormatFunc;
  groups?: Group[];
  groupsExpanded?: any[][];
  height?: number | string;
  loading?: ILoadingProps;
  paging?: PagingOptions;
  rowKeyField: string;
  treeGroupKeyField?: string;
  treeGroupsExpanded?: any[];
  rowReordering?: boolean;
  search?: SearchFunc;
  searchText?: string;
  selectedRows?: any[];
  singleAction?: any;
  sort?: SortFunc;
  sortingMode?: SortingMode;
  validation?: ValidationFunc;
  virtualScrolling?: VirtualScrolling;
  width?: number | string;
}

export interface ITableEvents {
  dispatch: DispatchFunc;
}

export interface ITableAllProps extends ITableEvents, ITableProps {
  childComponents?: ChildComponents;
}

export const RootTable: React.FunctionComponent<ITableAllProps> = (props) => {
  const { childComponents, columns, dispatch, data, format, loading, paging } =
    props;

  return (
    <>
      {isPagingShown(PagingPosition.Top, paging) && <TablePaging {...props} />}
      <TableWrapper {...props} />
      {isPagingShown(PagingPosition.Bottom, paging) && (
        <TablePaging {...props} />
      )}
      {/* @ts-ignore */}
      <Loading {...loading} childComponents={childComponents} />
      {columns.map(
        (column) =>
          column.isHeaderFilterPopupShown && (
            <Popup
              key={column.key}
              column={column}
              childComponents={childComponents}
              data={data}
              dispatch={dispatch}
              format={format}
            />
          ),
      )}
    </>
  );
};
