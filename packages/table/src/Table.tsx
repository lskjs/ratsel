import { Global } from '@ratsel/core';
import { ITableAllProps, ITableProps } from 'ka-table';
import {
  ICellEditorProps,
  ICellProps,
  ICellTextProps,
  IHeadCellProps,
} from 'ka-table/props';
import { DispatchFunc } from 'ka-table/types';
import React, {
  ComponentType,
  Dispatch,
  forwardRef,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { globalFonts } from './components/globalFonts';
import { RootTable } from './components/RootTable';
import { ThemedWrapper } from './components/ThemedWrapper';
import { Wrapper } from './components/Wrapper';
import {
  deserialize,
  DeserializeReturn,
  ISummaryCustomCellProps,
} from './utils/deserialize';
import { getStickyAttrs } from './utils/getStickyAttrs';
import { kaReducer } from './utils/kaReducer';
import { renderCustomComponent } from './utils/renderCustomComponent';

export interface ExtendedITableProps extends ITableProps {
  childComponents?: ITableAllProps['childComponents'];
}

export interface InnerState {
  tableState: DeserializeReturn;
  dataUpdatedAt?: number;
}

interface TableProps {
  data?: ExtendedITableProps;
  onChangeState?: (arg: any) => any;
  onChange?: (arg: any) => any | Promise<any>;
  state?: InnerState;
  setState?: Dispatch<SetStateAction<InnerState>>;
  ThemedWrapper?: ComponentType<PropsWithChildren>;
  dataUpdatedAt?: number;
}

interface TableRef {
  dispatch(action: any): void;
  getState(): InnerState;
}

export const Table = forwardRef<TableRef, TableProps>(
  (
    {
      data,
      onChangeState,
      onChange,
      state,
      setState,
      ThemedWrapper: ThemedWrapperProp,
      dataUpdatedAt,
    },
    ref,
  ) => {
    let _data = {} as InnerState;
    const prevData = useRef(data);
    if (!state && data) {
      _data = {
        tableState: deserialize(data),
      };
    }
    let innerState = state as InnerState;
    let changeTableState = setState;
    if (!state || !setState) {
      [innerState, changeTableState] = useState<InnerState>(_data);
    }
    // if (!_data.tableProps.singleAction) {
    //   _data.tableProps.singleAction = true;
    // }
    function updateTableData(__data: ExtendedITableProps) {
      const ___data = deserialize(__data);
      // if (!___data.tableProps.singleAction) {
      //   ___data.tableProps.singleAction = true;
      // }
      const _state: InnerState = {
        tableState: ___data,
      };
      if (dataUpdatedAt) {
        _state.dataUpdatedAt = dataUpdatedAt;
      }
      changeTableState?.(_state);
    }

    useEffect(() => {
      if (data && dataUpdatedAt && dataUpdatedAt !== innerState.dataUpdatedAt) {
        updateTableData(data);
      }
    }, [dataUpdatedAt]);

    useEffect(() => {
      if (
        !state &&
        data &&
        (prevData.current?.data?.length !== data?.data?.length ||
          prevData.current?.columns.length !== data?.columns?.length)
      ) {
        updateTableData(data);
      }
    }, [data]);

    const reducer = async (__action: any, __dispatch: DispatchFunc) => {
      changeTableState?.((__innerState: InnerState) => {
        const realInnerState = (
          __innerState.tableState ? __innerState : { tableState: __innerState }
        ) as InnerState;
        const newTableProps = kaReducer(
          realInnerState.tableState?.tableProps,
          __action,
        );
        const newState = {
          ...realInnerState?.tableState,
          tableProps: newTableProps,
        };

        if (onChangeState) onChangeState({ state: newState, action: __action });

        if (__action?.type === 'UpdateTableData') {
          const _newState = __action.updater(newState);
          return {
            ...realInnerState,
            tableState: _newState,
          };
        }

        return {
          ...realInnerState,
          tableState: newState,
        };
      });

      if (onChange) await onChange({ action: __action, dispatch: __dispatch });
    };

    const dispatch: DispatchFunc = async (action) => {
      reducer(action, dispatch);
    };

    const childComponents = {
      ...(innerState.tableState.tableProps.childComponents || {}),
      headCell: {
        ...(innerState.tableState.tableProps.childComponents?.headCell || {}),
        elementAttributes: (props: IHeadCellProps) =>
          getStickyAttrs(
            'thead',
            innerState.tableState.custom?.sticky,
            props.column,
            innerState.tableState.tableProps.columns,
          ),
      },
      cell: {
        ...(innerState.tableState.tableProps.childComponents?.cell || {}),
        elementAttributes: (props: ICellProps) =>
          getStickyAttrs(
            'tbody',
            innerState.tableState.custom?.sticky,
            props.column,
            innerState.tableState.tableProps.columns,
          ),
      },
      cellText: {
        ...(innerState.tableState.tableProps.childComponents?.cellText || {}),
        content: (props: ICellTextProps) =>
          renderCustomComponent(
            { columns: innerState.tableState.tableProps.columns, ...props },
            innerState.tableState.custom?.cellViewComponents?.[
              props.column.key
            ],
          ),
      },
      cellEditor: {
        ...(innerState.tableState.tableProps.childComponents?.cellEditor || {}),
        content: (props: ICellEditorProps) =>
          renderCustomComponent(
            { columns: innerState.tableState.tableProps.columns, ...props },
            innerState.tableState.custom?.cellEditorComponents?.[
              props.column.key
            ],
          ),
      },
    };

    if (innerState.tableState.custom?.tableWrapper) {
      childComponents.tableWrapper = {
        ...(innerState.tableState.tableProps.childComponents?.tableWrapper ||
          {}),
        content: (props: ITableAllProps) =>
          renderCustomComponent(
            props,
            innerState.tableState.custom?.tableWrapper,
          ),
      };
    }

    if (innerState.tableState.custom?.sticky?.summaryRow) {
      childComponents.summaryRow = {
        ...(innerState.tableState.tableProps.childComponents?.summaryRow || {}),
        elementAttributes: () => ({
          className: 'sticky-row-bottom',
        }),
      };
    }

    if (
      innerState.tableState.custom?.cellTotalComponent ||
      innerState.tableState.custom?.cellTotal
    ) {
      let content = innerState.tableState.custom?.cellTotalComponent;
      if (innerState.tableState.custom?.cellTotal) {
        content = (props: ISummaryCustomCellProps) =>
          renderCustomComponent(
            {
              ...props,
              tableProps: innerState.tableState.tableProps,
            },
            innerState.tableState.custom?.cellTotal,
          );
      }

      childComponents.summaryCell = {
        ...(innerState.tableState.tableProps.childComponents?.summaryCell ||
          {}),
        content,
        elementAttributes: (props) => ({
          ...getStickyAttrs(
            'summary',
            innerState.tableState.custom?.sticky,
            props.column,
            innerState.tableState.tableProps.columns,
          ),
        }),
      };
    }

    useImperativeHandle(
      ref,
      () => ({
        dispatch: (action: any) => {
          reducer(action, dispatch);
        },
        getState: () => innerState,
      }),
      [innerState, reducer],
    );
    const ThemedWrapperRender = ThemedWrapperProp || ThemedWrapper;
    return (
      <ThemedWrapperRender>
        <Wrapper
          virtual={Boolean(
            innerState.tableState.tableProps?.virtualScrolling?.enabled,
          )}
        >
          <Global styles={globalFonts} />
          <RootTable
            {...(innerState.tableState.tableProps || {})}
            dispatch={dispatch}
            childComponents={childComponents}
          />
        </Wrapper>
      </ThemedWrapperRender>
    );
  },
);

Table.displayName = 'Table';
