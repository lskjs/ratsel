import { Global } from '@ratsel/core';
import {
  ITableAllProps,
  ITableProps,
  kaReducer,
  Table as KaTable,
} from 'ka-table';
import {
  ICellEditorProps,
  ICellProps,
  ICellTextProps,
  IHeadCellProps,
} from 'ka-table/props';
import { DispatchFunc } from 'ka-table/types';
import React, { FC, useEffect, useState } from 'react';

import { globalFonts } from './components/globalFonts';
import { Wrapper } from './components/Wrapper';
import { deserialize } from './utils/deserialize';
import { getStickyAttrs } from './utils/getStickyAttrs';
import { renderCustomComponent } from './utils/renderCustomComponent';

export interface ExtendedITableProps extends ITableProps {
  childComponents?: ITableAllProps['childComponents'];
}

type ExternalReducer = (action: any, dispatch: DispatchFunc) => void;

interface TableProps {
  data: ExtendedITableProps;
  getReducer?: (reducer: ExternalReducer) => void;
  onChangeState?: (arg: any) => any;
  onChange?: (arg: any) => any | Promise<any>;
}

export const Table: FC<TableProps> = ({
  getReducer,
  data,
  onChangeState,
  onChange,
}) => {
  const _data = deserialize(data);
  if (getReducer && !_data.tableProps.singleAction) {
    _data.tableProps.singleAction = true;
  }
  const [custom, changeCustom] = useState(_data.custom);
  const [tableProps, changeTableProps] = useState(_data.tableProps);

  function updateTableData(__data: ExtendedITableProps) {
    const ___data = deserialize(__data);
    if (getReducer && !___data.tableProps.singleAction) {
      ___data.tableProps.singleAction = true;
    }
    changeCustom(___data.custom);
    changeTableProps(___data.tableProps);
  }

  useEffect(() => {
    updateTableData(data);
  }, [data]);

  const reducer = async (__action: any, __dispatch: DispatchFunc) => {
    if (__action?.type === 'UpdateTableDataAsync') {
      const newTableProps = await __action.updater(tableProps);
      changeTableProps(newTableProps);
      return;
    }

    changeTableProps((prevState: ExtendedITableProps) => {
      if (__action?.type === 'UpdateTableDataSync') {
        const newTableProps = __action.updater(prevState);
        return newTableProps;
      }

      const newState = kaReducer(prevState, __action);
      if (onChangeState) onChangeState({ state: newState, action: __action });
      return newState;
    });

    if (onChange) await onChange({ action: __action, dispatch: __dispatch });
  };

  const dispatch: DispatchFunc = async (action) => {
    reducer(action, dispatch);
    if (getReducer) {
      getReducer(reducer);
    }
  };

  const childComponents = {
    ...(tableProps.childComponents || {}),
    headCell: {
      ...(tableProps.childComponents?.headCell || {}),
      elementAttributes: (props: IHeadCellProps) =>
        getStickyAttrs('thead', custom?.sticky, props.column),
    },
    cell: {
      ...(tableProps.childComponents?.cell || {}),
      elementAttributes: (props: ICellProps) =>
        getStickyAttrs('tbody', custom?.sticky, props.column),
    },
    cellText: {
      ...(tableProps.childComponents?.cellText || {}),
      content: (props: ICellTextProps) =>
        renderCustomComponent(
          props,
          custom?.cellViewComponents?.[props.column.key],
        ),
    },
    cellEditor: {
      ...(tableProps.childComponents?.cellEditor || {}),
      content: (props: ICellEditorProps) =>
        renderCustomComponent(
          props,
          custom?.cellEditorComponents?.[props.column.key],
        ),
    },
  };

  if (custom?.sticky?.summaryRow) {
    childComponents.summaryRow = {
      ...(tableProps.childComponents?.summaryRow || {}),
      elementAttributes: () => ({
        className: 'sticky-row-bottom',
      }),
    };
  }

  if (custom?.cellTotalComponent) {
    childComponents.summaryCell = {
      ...(tableProps.childComponents?.summaryCell || {}),
      content: custom?.cellTotalComponent,
      elementAttributes: (props) =>
        getStickyAttrs('summary', custom?.sticky, props.column),
    };
  }

  return (
    <Wrapper virtual={Boolean(tableProps.virtualScrolling?.enabled)}>
      <Global styles={globalFonts} />
      <KaTable
        {...tableProps}
        dispatch={dispatch}
        childComponents={childComponents}
      />
    </Wrapper>
  );
};
