export * from 'ka-table/actionCreators';

export const updateTableDataSync = (dataUpdater: any) => ({
  type: 'UpdateTableDataSync',
  updater: dataUpdater,
});

export const updateTableDataAsync = (dataUpdater: any) => ({
  type: 'UpdateTableDataAsync',
  updater: dataUpdater,
});
