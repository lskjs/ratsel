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
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';

import { globalFonts } from './components/globalFonts';
import { Wrapper } from './components/Wrapper';
import { deserialize } from './utils/deserialize';
import { getStickyAttrs } from './utils/getStickyAttrs';
import { renderCustomComponent } from './utils/renderCustomComponent';

export interface ExtendedITableProps extends ITableProps {
  childComponents?: ITableAllProps['childComponents'];
}

export interface ITableState {
  tableProps: ExtendedITableProps;
}

type ExternalReducer = (action: any, dispatch: DispatchFunc) => void;

interface TableProps {
  data: ExtendedITableProps;
  getReducer?: (reducer: ExternalReducer) => void;
  onChangeState?: (arg: any) => any;
  onChange?: (arg: any) => any | Promise<any>;
}

interface TableRef {
  dispatch(action: any): void;
  getState(): ITableState;
}

export const Table = forwardRef<TableRef, TableProps>(
  ({ data, onChangeState, onChange }, ref) => {
    const _data = deserialize(data);
    // if (!_data.tableProps.singleAction) {
    //   _data.tableProps.singleAction = true;
    // }
    const [tableState, changeTableState] = useState(_data);

    function updateTableData(__data: ExtendedITableProps) {
      const ___data = deserialize(__data);
      // if (!___data.tableProps.singleAction) {
      //   ___data.tableProps.singleAction = true;
      // }
      changeTableState(___data);
    }

    useEffect(() => {
      updateTableData(data);
    }, [data]);

    const reducer = async (__action: any, __dispatch: DispatchFunc) => {
      changeTableState((prevState: ITableState) => {
        const newTableProps = kaReducer(prevState.tableProps, __action);
        const newState = { ...prevState, tableProps: newTableProps };

        if (onChangeState) onChangeState({ state: newState, action: __action });

        if (__action?.type === 'UpdateTableData') {
          const _newState = __action.updater(newState);
          return _newState;
        }

        return newState;
      });

      if (onChange) await onChange({ action: __action, dispatch: __dispatch });
    };

    const dispatch: DispatchFunc = async (action) => {
      reducer(action, dispatch);
    };

    const childComponents = {
      ...(tableState.tableProps.childComponents || {}),
      headCell: {
        ...(tableState.tableProps.childComponents?.headCell || {}),
        elementAttributes: (props: IHeadCellProps) =>
          getStickyAttrs('thead', tableState.custom?.sticky, props.column),
      },
      cell: {
        ...(tableState.tableProps.childComponents?.cell || {}),
        elementAttributes: (props: ICellProps) =>
          getStickyAttrs('tbody', tableState.custom?.sticky, props.column),
      },
      cellText: {
        ...(tableState.tableProps.childComponents?.cellText || {}),
        content: (props: ICellTextProps) =>
          renderCustomComponent(
            props,
            tableState.custom?.cellViewComponents?.[props.column.key],
          ),
      },
      cellEditor: {
        ...(tableState.tableProps.childComponents?.cellEditor || {}),
        content: (props: ICellEditorProps) =>
          renderCustomComponent(
            props,
            tableState.custom?.cellEditorComponents?.[props.column.key],
          ),
      },
    };

    if (tableState.custom?.sticky?.summaryRow) {
      childComponents.summaryRow = {
        ...(tableState.tableProps.childComponents?.summaryRow || {}),
        elementAttributes: () => ({
          className: 'sticky-row-bottom',
        }),
      };
    }

    if (tableState.custom?.cellTotalComponent) {
      childComponents.summaryCell = {
        ...(tableState.tableProps.childComponents?.summaryCell || {}),
        content: tableState.custom?.cellTotalComponent,
        elementAttributes: (props) =>
          getStickyAttrs('summary', tableState.custom?.sticky, props.column),
      };
    }

    useImperativeHandle(
      ref,
      () => ({
        dispatch: (action: any) => {
          reducer(action, dispatch);
        },
        getState: () => tableState,
      }),
      [tableState, reducer],
    );

    return (
      <Wrapper
        virtual={Boolean(tableState.tableProps.virtualScrolling?.enabled)}
      >
        <Global styles={globalFonts} />
        <KaTable
          {...tableState.tableProps}
          dispatch={dispatch}
          childComponents={childComponents}
        />
      </Wrapper>
    );
  },
);

Table.displayName = 'Table';
