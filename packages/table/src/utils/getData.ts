import { ITableProps } from 'ka-table';
import { getPageData } from 'ka-table/Utils/PagingUtils';

import { getDataWithoutPaging } from './getDataWithoutPaging';

export const getData = (props: ITableProps) => {
  const { paging } = props;
  let resultData = getDataWithoutPaging(props);
  resultData = getPageData(resultData, paging);

  return resultData;
};
