export * from 'ka-table/actionCreators';

export const updateTableData = (newTableData: any) => ({
  type: 'UpdateTableData',
  data: newTableData,
});
