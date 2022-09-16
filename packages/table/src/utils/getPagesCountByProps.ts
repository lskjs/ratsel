import { ITableProps } from 'ka-table';
import { getPagesCount } from 'ka-table/Utils/PagingUtils';

import { getDataWithoutPaging } from './getDataWithoutPaging';

export const getPagesCountByProps = (props: ITableProps) => {
  const { paging } = props;
  let pagesCount = 1;
  if (paging && paging.enabled) {
    const data = getDataWithoutPaging(props);
    pagesCount = getPagesCount(data, paging);
  }
  return pagesCount;
};
