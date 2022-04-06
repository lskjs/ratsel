import { ISummaryCellProps } from 'ka-table/props';

export const getStickyAttrs = (
  type = 'tbody',
  sticky = {},
  column: ISummaryCellProps['column'],
) => {
  let attrs = {};
  Object.keys(sticky).forEach((key) => {
    if ((sticky?.[key] || []).includes(column.key)) {
      attrs = {
        className: `sticky-cell-${key} sticky-cell-${type}`,
        style: column.style,
      };
    }
  });
  return attrs;
};
