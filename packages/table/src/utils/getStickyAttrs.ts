/* eslint-disable default-param-last */
import { ITableProps } from 'ka-table';
import { ISummaryCellProps } from 'ka-table/props';
import { CSSProperties } from 'react';

export const getStickyAttrs = (
  type = 'tbody',
  sticky = {},
  column: ISummaryCellProps['column'],
  columns: ITableProps['columns'],
) => {
  let attrs = {
    className: 'static-cell',
    style: column.style,
  };
  Object.keys(sticky).forEach((key) => {
    if (!['left', 'right'].includes(key)) return;
    if ((sticky?.[key] || []).includes(column.key)) {
      const stickyRow = sticky[key];
      const indexEl = stickyRow.indexOf(column.key);
      const offsets = stickyRow.slice(0, indexEl);
      const cols = columns
        .filter((obj) => offsets.includes(obj.key))
        .map((obj) => obj.width) as number[];

      const offset = cols.reduce<number>((prev, curr) => prev + curr, 0);
      attrs = {
        className: `sticky-cell-${key} sticky-cell-${type}`,
        style: {
          ...(column.style || {}),
          '--sticky-offset': `${offset}px`,
        } as CSSProperties,
      };
    }
  });
  return attrs;
};
