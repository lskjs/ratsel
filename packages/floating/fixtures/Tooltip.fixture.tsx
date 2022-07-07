import React from 'react';

import { Tooltip } from '../src';

const trigger = (
  <button type="button" style={{ margin: '120px 400px' }}>
    Кнопка триггер
  </button>
);

const contentSimple = 'Just a text';
const ContentComponent = () => (
  <div>
    <h3>Heading</h3>
    <p>Something</p>
  </div>
);

function funcComponent() {
  return (
    <div>
      <h3>YEP, it&apos;s function</h3>
      <p>Something</p>
    </div>
  );
}

export default {
  default: <Tooltip label={contentSimple}>{trigger}</Tooltip>,
  renderLabel: <Tooltip label={<ContentComponent />}>{trigger}</Tooltip>,
  functionLabel: <Tooltip label={funcComponent}>{trigger}</Tooltip>,
  isPortal: (
    <Tooltip placement="right-end" label={contentSimple} isPortal>
      {trigger}
    </Tooltip>
  ),
  'placement-top-start': (
    <Tooltip placement="top-start" label={contentSimple}>
      {trigger}
    </Tooltip>
  ),
  'placement-top-end': (
    <Tooltip placement="top-end" label={contentSimple}>
      {trigger}
    </Tooltip>
  ),
  'placement-bottom': (
    <Tooltip placement="bottom" label={contentSimple}>
      {trigger}
    </Tooltip>
  ),
  'placement-bottom-start': (
    <Tooltip placement="bottom-start" label={contentSimple}>
      {trigger}
    </Tooltip>
  ),
  'placement-bottom-end': (
    <Tooltip placement="bottom-end" label={contentSimple}>
      {trigger}
    </Tooltip>
  ),
  'placement-left': (
    <Tooltip placement="left" label={contentSimple}>
      {trigger}
    </Tooltip>
  ),
  'placement-left-start': (
    <Tooltip placement="left-start" label={contentSimple}>
      {trigger}
    </Tooltip>
  ),
  'placement-left-end': (
    <Tooltip placement="left-end" label={contentSimple}>
      {trigger}
    </Tooltip>
  ),
  'placement-right': (
    <Tooltip placement="right" label={contentSimple}>
      {trigger}
    </Tooltip>
  ),
  'placement-right-start': (
    <Tooltip placement="right-start" label={contentSimple}>
      {trigger}
    </Tooltip>
  ),
  'placement-right-end': (
    <Tooltip placement="right-end" label={contentSimple}>
      {trigger}
    </Tooltip>
  ),
  
};
