import React from 'react';

import { Popover } from '../src';

const trigger = (
  <button type="button" style={{ margin: '120px 400px' }}>
    Кнопка триггер
  </button>
);

const content = <div style={{ width: 250 }}>Контент</div>;

export default {
  default: <Popover trigger={trigger}>{content}</Popover>,
  defaultOpen: (
    <Popover trigger={trigger} defaultOpen>
      {content}
    </Popover>
  ),
  arrow: (
    <Popover trigger={trigger} defaultOpen arrow>
      {content}
    </Popover>
  ),
  'arrow-placement-top-start': (
    <Popover trigger={trigger} defaultOpen arrow placement="top-start">
      {content}
    </Popover>
  ),
  'arrow-placement-top-end': (
    <Popover trigger={trigger} defaultOpen arrow placement="top-end">
      {content}
    </Popover>
  ),
  'arrow-placement-top': (
    <Popover trigger={trigger} defaultOpen arrow placement="top">
      {content}
    </Popover>
  ),
  'arrow-placement-bottom-start': (
    <Popover trigger={trigger} defaultOpen arrow placement="bottom-start">
      {content}
    </Popover>
  ),
  'arrow-placement-bottom-end': (
    <Popover trigger={trigger} defaultOpen arrow placement="bottom-end">
      {content}
    </Popover>
  ),
  'arrow-placement-bottom': (
    <Popover trigger={trigger} defaultOpen arrow placement="bottom">
      {content}
    </Popover>
  ),
  'arrow-placement-left-start': (
    <Popover trigger={trigger} defaultOpen arrow placement="left-start">
      {content}
    </Popover>
  ),
  'arrow-placement-left-end': (
    <Popover trigger={trigger} defaultOpen arrow placement="left-end">
      {content}
    </Popover>
  ),
  'arrow-placement-left': (
    <Popover trigger={trigger} defaultOpen arrow placement="left">
      {content}
    </Popover>
  ),
  'arrow-placement-right-start': (
    <Popover trigger={trigger} defaultOpen arrow placement="right-start">
      {content}
    </Popover>
  ),
  'arrow-placement-right-end': (
    <Popover trigger={trigger} defaultOpen arrow placement="right-end">
      {content}
    </Popover>
  ),
  'arrow-placement-right': (
    <Popover trigger={trigger} defaultOpen arrow placement="right">
      {content}
    </Popover>
  ),
};
