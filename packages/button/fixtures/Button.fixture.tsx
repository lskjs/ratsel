import React from 'react';

import { BookmarkIcon } from '../assets/BookmarkIcon';
import { Button } from '../src';

async function promiseClick() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 1000);
  });
}

export default {
  primary: <Button variant="primary">Кнопка</Button>,
  secondary: <Button variant="secondary">Кнопка</Button>,
  shadow: <Button variant="shadow">Кнопка</Button>,
  'shadow-bordered': (
    <Button variant="shadow" bordered>
      Кнопка
    </Button>
  ),
  loading: (
    <Button loading variant="primary">
      Кнопка
    </Button>
  ),
  success: (
    <Button status="success" variant="primary">
      Кнопка
    </Button>
  ),
  error: (
    <Button status="error" variant="primary">
      Кнопка
    </Button>
  ),
  promiseClick: (
    <Button variant="primary" onClick={promiseClick}>
      Кнопка
    </Button>
  ),
  disabled: (
    <Button variant="primary" disabled bordered={false}>
      Кнопка
    </Button>
  ),
  'min-width': <Button minWidth={160}>Кнопка</Button>,
  block: <Button block>Кнопка</Button>,
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
  'min-width-with-iconLeft': (
    <Button minWidth={160} iconLeft={<BookmarkIcon />}>
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
