import React from 'react';

import { Popover } from '../src';

const trigger = (
  <button type="button" style={{ margin: '120px 400px' }}>
    Кнопка триггер
  </button>
);

const content = <div style={{ width: 250 }}>Контент</div>;
const content2 = ({ close }) => (
  <button
    type="button"
    style={{ width: 200, height: 42, background: 'none' }}
    onClick={close}
  >
    Кнопка
  </button>
);

export default {
  default: <Popover trigger={trigger}>{content}</Popover>,
  defaultOpen: (
    <Popover trigger={trigger} defaultOpen>
      {content}
    </Popover>
  ),
  isPortal: (
    <Popover trigger={trigger} isPortal>
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
      trigger={trigger}
      defaultOpen
      middlewares={['offset', 'flip', 'shift', 'arrow']}
    >
      {content}
    </Popover>
  ),
  'arrow-placement-top-start': (
    <Popover
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
      trigger={trigger}
      defaultOpen
      middlewares={['offset', 'flip', 'shift', 'arrow']}
      placement="right"
    >
      {content}
    </Popover>
  ),
};
