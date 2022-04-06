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

interface TableProps {
  data: ExtendedITableProps;
  onChange?: (arg: any) => any;
}

export const Table: FC<TableProps> = ({ data, onChange }) => {
  const _data = deserialize(data);
  const [custom, changeCustom] = useState(_data.custom);
  const [tableProps, changeTableProps] = useState(_data.tableProps);

  useEffect(() => {
    const __data = deserialize(data);
    changeCustom(__data.custom);
    changeTableProps(__data.tableProps);
  }, [data]);

  const dispatch: DispatchFunc = async (action) => {
    changeTableProps((prevState: ExtendedITableProps) => {
      const newState = kaReducer(prevState, action);
      if (onChange) onChange({ state: newState, action });
      return newState;
    });
  };

  const childComponents = {
    headCell: {
      elementAttributes: (props: IHeadCellProps) =>
        getStickyAttrs('thead', custom?.sticky, props.column),
    },
    cell: {
      elementAttributes: (props: ICellProps) =>
        getStickyAttrs('tbody', custom?.sticky, props.column),
    },
    cellText: {
      content: (props: ICellTextProps) =>
        renderCustomComponent(
          props,
          custom?.cellViewComponents?.[props.column.key],
        ),
    },
    cellEditor: {
      content: (props: ICellEditorProps) =>
        renderCustomComponent(
          props,
          custom?.cellEditorComponents?.[props.column.key],
        ),
    },
    ...(tableProps.childComponents || {}),
  };

  if (custom?.cellTotalComponent) {
    childComponents.summaryCell = {
      content: custom?.cellTotalComponent,
      elementAttributes: (props) =>
        getStickyAttrs('summary', custom?.sticky, props.column),
    };
  }

  return (
    <Wrapper>
      <Global styles={globalFonts} />
      <KaTable
        {...tableProps}
        dispatch={dispatch}
        childComponents={childComponents}
      />
    </Wrapper>
  );
};
