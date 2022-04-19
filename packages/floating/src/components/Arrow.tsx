// @ts-nocheck
import { css, styled } from '@ratsel/core';

interface ArrowProps {
  x?: number;
  y?: number;
  staticSide?: string;
}

export const Arrow = styled('div', {
  shouldForwardProp: (prop) =>
    !['x', 'y', 'staticSide'].includes(prop as string),
})<ArrowProps>`
  position: absolute;
  top: ${(props) => (typeof props.y === 'number' ? `${props.y}px` : 'unset')};
  left: ${(props) => (typeof props.x === 'number' ? `${props.x}px` : 'unset')};
  will-change: top, bottom, left, right;
  transform: rotate(45deg);

  width: ${(props) => props.theme.ratsel.floating.arrowSize};
  height: ${(props) => props.theme.ratsel.floating.arrowSize};

  background: ${(props) => props.theme.ratsel.floating.background};

  ${(props) => {
    if (props.staticSide) {
      return css`
        ${props.staticSide}: -4px;
      `;
    }
    return css``;
  }}
`;
