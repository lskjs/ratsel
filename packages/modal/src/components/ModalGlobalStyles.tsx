import { css, Global } from '@ratsel/core';
import React, { FC } from 'react';

const globalStyles = css`
  .bodyModal {
    overflow: hidden;
  }

  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
  }

  .ReactModal__Overlay .ReactModal__Content {
    opacity: 0;
    transform: translate3d(0, 5%, 0) scale(1.05);
    transition: opacity 0.15s ease-out, transform 0.2s ease-out;
  }

  .ReactModal__Overlay--after-open .ReactModal__Content {
    transform: translate3d(0, 0%, 0) scale(1);
    opacity: 1;
  }

  .ReactModal__Overlay--before-close .ReactModal__Content {
    transform: translate3d(0, -5%, 0) scale(0.95);
    opacity: 0;
  }
`;

export const ModalGlobalStyles: FC = ({ children }) => (
  <>
    <Global styles={globalStyles} />
    {children}
  </>
);
