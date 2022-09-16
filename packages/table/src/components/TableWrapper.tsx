import { ITableAllProps } from 'ka-table';
import { ColGroup } from 'ka-table/Components/ColGroup/ColGroup';
import TableBody from 'ka-table/Components/TableBody/TableBody';
import { TableFoot } from 'ka-table/Components/TableFoot/TableFoot';
import { TableHead } from 'ka-table/Components/TableHead/TableHead';
import defaultOptions from 'ka-table/defaultOptions';
import { getElementCustomization } from 'ka-table/Utils/ComponentUtils';
import { getExpandedGroups } from 'ka-table/Utils/GroupUtils';
import React from 'react';

import { EditingMode, FilteringMode, SortingMode } from '../enums';
import { prepareTableOptions } from '../utils/prepareTableOptions';

export const TableWrapper: React.FunctionComponent<ITableAllProps> = (
  props,
) => {
  const {
    childComponents = {},
    columnReordering,
    columnResizing,
    data = [],
    dispatch,
    editableCells = [],
    editingMode = EditingMode.None,
    filteringMode = FilteringMode.None,
    groups,
    rowReordering = false,
    selectedRows = [],
    sortingMode = SortingMode.None,
  } = props;
  let { groupsExpanded } = props;
  const preparedOptions = prepareTableOptions(props);

  if (groups && !groupsExpanded) {
    groupsExpanded = getExpandedGroups(preparedOptions.groupedData);
  }

  const areAllRowsSelected = data.length === selectedRows.length;

  const { elementAttributes } = getElementCustomization(
    {
      className: defaultOptions.css.table,
    },
    props,
    childComponents.table,
  );

  return (
    <table {...elementAttributes}>
      <ColGroup
        columns={preparedOptions.columns}
        groupColumnsCount={preparedOptions.groupColumnsCount}
      />
      <TableHead
        {...props}
        areAllRowsSelected={areAllRowsSelected}
        childComponents={childComponents}
        columnReordering={columnReordering}
        columnResizing={columnResizing}
        columns={preparedOptions.columns}
        dispatch={dispatch}
        filteringMode={filteringMode}
        groupColumnsCount={preparedOptions.groupColumnsCount}
        sortingMode={sortingMode}
      />
      <TableBody
        {...props}
        childComponents={childComponents}
        columns={preparedOptions.columns}
        data={preparedOptions.groupedData}
        editableCells={editableCells}
        editingMode={editingMode}
        groupColumnsCount={preparedOptions.groupColumnsCount}
        groupedColumns={preparedOptions.groupedColumns}
        groupsExpanded={groupsExpanded}
        rowReordering={rowReordering}
        selectedRows={selectedRows}
      />
      {(childComponents.tableFoot ||
        childComponents.summaryRow ||
        childComponents.summaryCell) && (
        <TableFoot
          {...props}
          data={data}
          columns={preparedOptions.columns}
          groupColumnsCount={preparedOptions.groupColumnsCount}
        />
      )}
    </table>
  );
};
