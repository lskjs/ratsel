/* eslint-disable max-len */
import {
  closeEditor,
  openEditor,
  updateCellValue,
} from 'ka-table/actionCreators';
import { ICellEditorProps, ICellProps } from 'ka-table/props';
import React, { useState } from 'react';

import { Table } from '../src';

function TotalComponent({ column, data }) {
  switch (column.key) {
    case 'user':
      return <b>Total</b>;
    case 'totalBudget':
      return data.reduce(
        (total, current) => total + current.totalBudget || 0,
        0,
      );
    case 'totalSpent':
      return data.reduce(
        (total, current) => total + current.totalSpent || 0,
        0,
      );
    case 'passed':
      return (
        <>
          <b>Passed total: {data.filter((o) => o.passed).length}</b>
        </>
      );
    default:
      return null;
  }
}

const UserCell: React.FC<ICellProps & { custom: any }> = ({
  column,
  dispatch,
  rowKeyValue,
  value,
}) => (
  <div
    onClick={() => {
      dispatch(openEditor(rowKeyValue, column.key));
    }}
    style={{
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <div
      style={{
        flexShrink: 0,
        width: 40,
        height: 40,
        position: 'relative',
        marginRight: 13,
      }}
    >
      <img
        src={value.avatar}
        alt={value.title}
        width={40}
        height={40}
        style={{ borderRadius: '100vw' }}
      />
      <div
        style={{
          width: 16,
          height: 16,
          borderRadius: '100vw',
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          right: 0,
          bottom: 0,
          background: '#fff',
        }}
      >
        Y
      </div>
    </div>
    <div style={{ fontSize: 13, fontWeight: 400, color: '#4a4a4a' }}>
      {value.title}
    </div>
  </div>
);

const OptionsCell: React.FC<ICellProps & { custom: any }> = ({
  column,
  // dispatch,
  rowKeyValue,
  value,
  rowData,
}) => (
  <button
    style={{
      width: 48,
      height: 48,
      padding: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 16,
      fontWeight: 'bold',
      border: 'none',
      background: 'transparent',
    }}
    onClick={() => {
      // eslint-disable-next-line no-alert
      alert(JSON.stringify({ column, rowKeyValue, value, rowData }));
    }}
  >
    ***
  </button>
);

const UserEditor: React.FC<ICellEditorProps & { custom: any }> = ({
  column,
  rowKeyValue,
  dispatch,
  value,
  custom,
}) => {
  const close = () => {
    dispatch(closeEditor(rowKeyValue, column.key));
  };
  const [editorValue, setValue] = useState(value);
  return (
    <div className="custom-editor">
      <input
        className="form-control"
        type="text"
        value={editorValue.title}
        onChange={(event) =>
          setValue({
            ...editorValue,
            title: event.currentTarget.value,
          })
        }
      />
      <button
        className="custom-editor-button custom-editor-button-save"
        onClick={async () => {
          try {
            await custom?.updater({
              rowKeyValue,
              key: column.key,
              editorValue,
            });
            dispatch(updateCellValue(rowKeyValue, column.key, editorValue));
          } catch (error) {
            console.log(error);
          } finally {
            close();
          }
        }}
      >
        Save
      </button>
      <button
        className="custom-editor-button custom-editor-button-cancel"
        onClick={close}
      >
        Cancel
      </button>
    </div>
  );
};

const data = {
  columns: [
    {
      key: 'user',
      title: 'Influencer',
      isEditable: true,
      width: 320,
    },
    {
      key: 'status',
      title: 'Status',
      isEditable: true,
      width: 160,
    },
    {
      key: 'contactAt',
      title: 'Last contact day',
      isEditable: true,
      width: 180,
    },
    {
      key: 'format',
      title: 'Format',
      width: 120,
    },
    {
      key: 'totalBudget',
      title: 'Total budget',
      width: 140,
    },
    {
      key: 'totalSpent',
      title: 'Total spent',
      width: 160,
    },
    {
      key: 'er',
      title: 'ER',
      width: 140,
    },
    {
      key: 'views',
      title: 'Impressions/Views',
      width: 200,
    },
    {
      key: 'avgViews',
      title: 'AVG Views',
      width: 110,
    },
    {
      key: 'cpm',
      title: 'CPM',
      width: 60,
    },
    {
      key: 'notes',
      title: 'Notes',
      width: 400,
    },
    {
      key: 'cmd:options',
      width: 48,
      style: {
        padding: 0,
      },
    },
  ],
  data: [
    {
      _id: 'AKedOLSTMA4rzsLH7uqiZ5BLLtRN83KrQwSHK9RFzpReXg',
      user: {
        _id: 'AKedOLSTMA4rzsLH7uqiZ5BLLtRN83KrQwSHK9RFzpReXg',
        avatar:
          'https://yt3.ggpht.com/ytc/AKedOLSTMA4rzsLH7uqiZ5BLLtRN83KrQwSHK9RFzpReXg=s176-c-k-c0x00ffffff-no-rj',
        title: 'Yardrey',
        platform: 'youtube',
      },
      status: 'new',
      contactAt: new Date('2022-03-20'),
      format: 'postStory',
      totalBudget: 28500,
      er: '99.99%',
      views: '999.99K',
      avgViews: '1M',
      cpm: '$12',
      notes:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      _id: '2',
      user: {
        _id: '2',
        avatar:
          'https://yt3.ggpht.com/8jwjxBVOsqIFY00sfeAUDdIPvW2EbSv6CEvdPl-ys5GcranurSeb0U8gaGeXU8W-qTf0QjrEvQ=s176-c-k-c0x00ffffff-no-rj',
        title: 'Максим Кац',
        platform: 'youtube',
      },
      status: 'new',
      contactAt: new Date('2022-03-18'),
      format: 'video',
      totalBudget: 13800,
      totalSpent: 12000,
      er: '99.99%',
      views: '999.99K',
      avgViews: '1M',
      cpm: '$17',
    },
  ],
  rowKeyField: '_id',
  format: ({ column, value }) => {
    if (!value) return '';
    if (column.key === 'contactAt') {
      return new Date(value).toDateString();
    }
    if (column.key === 'notes') {
      return `${(value || '').slice(0, 40)}...`;
    }
  },
  custom: {
    sticky: {
      left: ['user'],
      right: ['cmd:options'],
    },
    cellViewComponents: {
      user: {
        component: UserCell,
      },
      'cmd:options': {
        component: OptionsCell,
      },
    },
    cellEditorComponents: {
      user: {
        component: UserEditor,
        props: {
          updater: async (action: any) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve(action);
              }, 2000);
            }),
        },
      },
    },
    cellTotalComponent: TotalComponent,
  },
};

export default (
  <Table
    data={data}
    onChangeState={(obj) => {
      console.log('onChangeState', obj.action.type, obj);
    }}
    onChange={(obj) => {
      console.log('onChange', obj.action.type, obj);
    }}
  />
);
