import { ITableProps, kaReducer, Table as KaTable } from 'ka-table';
import { DataType, EditingMode, SortingMode } from 'ka-table/enums';
import { DispatchFunc } from 'ka-table/types';
import type { FC } from 'react';
import React, { useState } from 'react';

import { Wrapper } from './components/Wrapper';

export const Table: FC = () => {
  const dataArray = Array(10)
    .fill(undefined)
    .map((_, index) => ({
      column1: `column:1 row:${index}`,
      column2: `column:2 row:${index}`,
      column3: `column:3 row:${index}`,
      column4: `column:4 row:${index}`,
      id: index,
    }));

  const tablePropsInit: ITableProps = {
    columns: [
      { key: 'column1', title: 'Column 1', dataType: DataType.String },
      { key: 'column2', title: 'Column 2', dataType: DataType.String },
      { key: 'column3', title: 'Column 3', dataType: DataType.String },
      { key: 'column4', title: 'Column 4', dataType: DataType.String },
    ],
    data: dataArray,
    editingMode: EditingMode.None,
    rowKeyField: 'id',
    sortingMode: SortingMode.Single,
  };

  const [tableProps, changeTableProps] = useState(tablePropsInit);

  const dispatch: DispatchFunc = (action) => {
    // dispatch has an *action as an argument
    // *kaReducer returns new *props according to previous state and *action, and saves new props to the state
    changeTableProps((prevState: ITableProps) => kaReducer(prevState, action));
  };

  return (
    <Wrapper>
      <KaTable
        {...tableProps} // ka-table UI is rendered according to props
        dispatch={dispatch} // dispatch is required for obtain new actions from the UI
      />
    </Wrapper>
  );
};
