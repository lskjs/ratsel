import React from 'react';

import { Popover } from '../src';

const trigger = (
  <button type="button" style={{ margin: '120px 400px' }}>
    Кнопка триггер
  </button>
);

const content = <div style={{ width: 250 }}>Контент</div>;
const content2 = (props) => (
  <button
    type="button"
    style={{ width: 200, height: 42, background: 'none' }}
    onClick={props?.close}
  >
    Кнопка
  </button>
);

export default {
  default: (
    <Popover isControlled={false} trigger={trigger}>
      {content}
    </Popover>
  ),
  defaultOpen: (
    <Popover isControlled={false} trigger={trigger} defaultOpen>
      {content}
    </Popover>
  ),
  isPortal: (
    <Popover isControlled={false} trigger={trigger} isPortal>
      {content}
    </Popover>
  ),
  dropdown: (
    <Popover trigger={trigger} interactions={['click', 'focus']}>
      {content2}
    </Popover>
  ),
  arrow: (
    <Popover
      isControlled={false}
      trigger={trigger}
      defaultOpen
      middlewares={['offset', 'flip', 'shift', 'arrow']}
    >
      {content}
    </Popover>
  ),
  'arrow-placement-top-start': (
    <Popover
      isControlled={false}
      trigger={trigger}
      defaultOpen
      middlewares={['offset', 'flip', 'shift', 'arrow']}
      placement="top-start"
    >
      {content}
    </Popover>
  ),
  'arrow-placement-top-end': (
    <Popover
      isControlled={false}
      trigger={trigger}
      defaultOpen
      middlewares={['offset', 'flip', 'shift', 'arrow']}
      placement="top-end"
    >
      {content}
    </Popover>
  ),
  'arrow-placement-top': (
    <Popover
      isControlled={false}
      trigger={trigger}
      defaultOpen
      middlewares={['offset', 'flip', 'shift', 'arrow']}
      placement="top"
    >
      {content}
    </Popover>
  ),
  'arrow-placement-bottom-start': (
    <Popover
      isControlled={false}
      trigger={trigger}
      defaultOpen
      middlewares={['offset', 'flip', 'shift', 'arrow']}
      placement="bottom-start"
    >
      {content}
    </Popover>
  ),
  'arrow-placement-bottom-end': (
    <Popover
      isControlled={false}
      trigger={trigger}
      defaultOpen
      middlewares={['offset', 'flip', 'shift', 'arrow']}
      placement="bottom-end"
    >
      {content}
    </Popover>
  ),
  'arrow-placement-bottom': (
    <Popover
      isControlled={false}
      trigger={trigger}
      defaultOpen
      middlewares={['offset', 'flip', 'shift', 'arrow']}
      placement="bottom"
    >
      {content}
    </Popover>
  ),
  'arrow-placement-left-start': (
    <Popover
      isControlled={false}
      trigger={trigger}
      defaultOpen
      middlewares={['offset', 'flip', 'shift', 'arrow']}
      placement="left-start"
    >
      {content}
    </Popover>
  ),
  'arrow-placement-left-end': (
    <Popover
      isControlled={false}
      trigger={trigger}
      defaultOpen
      middlewares={['offset', 'flip', 'shift', 'arrow']}
      placement="left-end"
    >
      {content}
    </Popover>
  ),
  'arrow-placement-left': (
    <Popover
      isControlled={false}
      trigger={trigger}
      defaultOpen
      middlewares={['offset', 'flip', 'shift', 'arrow']}
      placement="left"
    >
      {content}
    </Popover>
  ),
  'arrow-placement-right-start': (
    <Popover
      isControlled={false}
      trigger={trigger}
      defaultOpen
      middlewares={['offset', 'flip', 'shift', 'arrow']}
      placement="right-start"
    >
      {content}
    </Popover>
  ),
  'arrow-placement-right-end': (
    <Popover
      isControlled={false}
      trigger={trigger}
      defaultOpen
      middlewares={['offset', 'flip', 'shift', 'arrow']}
      placement="right-end"
    >
      {content}
    </Popover>
  ),
  'arrow-placement-right': (
    <Popover
      isControlled={false}
      trigger={trigger}
      defaultOpen
      middlewares={['offset', 'flip', 'shift', 'arrow']}
      placement="right"
    >
      {content}
    </Popover>
  ),
};
