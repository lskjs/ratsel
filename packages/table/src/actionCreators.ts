export * from 'ka-table/actionCreators';

export const updateTableData = (dataUpdater: any) => ({
  type: 'UpdateTableData',
  updater: dataUpdater,
});
