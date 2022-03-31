import React from 'react';

import { Button } from '../src';
import { BookmarkIcon } from '../assets/BookmarkIcon';

export default {
  primary: <Button variant="primary">Кнопка</Button>,
  secondary: <Button variant="secondary">Кнопка</Button>,
  shadow: <Button variant="shadow">Кнопка</Button>,
  ['shadow-bordered']: (
    <Button variant="shadow" bordered>
      Кнопка
    </Button>
  ),
  disabled: (
    <Button variant="primary" disabled bordered={false}>
      Кнопка
    </Button>
  ),
  icon: (
    <Button
      variant="primary"
      bordered={false}
      disabled={false}
      icon={<BookmarkIcon />}
    />
  ),
  iconLeft: (
    <Button
      variant="primary"
      bordered={false}
      disabled={false}
      iconLeft={<BookmarkIcon />}
    >
      Кнопка
    </Button>
  ),
  iconRight: (
    <Button
      variant="primary"
      bordered={false}
      disabled={false}
      iconRight={<BookmarkIcon />}
    >
      Кнопка
    </Button>
  ),
  iconBoth: (
    <Button
      variant="primary"
      bordered={false}
      disabled={false}
      iconLeft={<BookmarkIcon />}
      iconRight={<BookmarkIcon />}
    >
      Кнопка
    </Button>
  ),
};
