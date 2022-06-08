import { css, styled } from '@ratsel/core';

interface ArrowProps {
  x?: number;
  y?: number;
  staticSide?: string;
}

export const TooltipArrow = styled('div', {
  shouldForwardProp: (prop) =>
    !['x', 'y', 'staticSide'].includes(prop as string),
})<ArrowProps>`
  position: absolute;
  top: ${(props) => (typeof props.y === 'number' ? `${props.y}px` : 'unset')};
  left: ${(props) => (typeof props.x === 'number' ? `${props.x}px` : 'unset')};
  will-change: top, bottom, left, right;
  transform: rotate(45deg);
  z-index: -1;

  width: ${(props) => props.theme.ratsel.floating.tooltipArrowSize};
  height: ${(props) => props.theme.ratsel.floating.tooltipArrowSize};

  background: ${(props) => props.theme.ratsel.floating.tooltipBackground};

  ${(props) => {
    if (props.staticSide) {
      return css`
        ${props.staticSide}: -4px;
      `;
    }
    return css``;
  }}
`;
