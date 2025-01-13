import { styled } from '@ratsel/core';

interface PopoverBaseProps {
  position: string;
  x: number | null;
  y: number | null;
}

export const PopoverBase = styled('div', {
  shouldForwardProp: (prop) => !['position', 'x', 'y'].includes(prop as string),
})<PopoverBaseProps>`
  position: ${(props) => props.position};
  top: ${(props) => (typeof props.y === 'number' ? `${props.y}px` : 'unset')};
  left: ${(props) => (typeof props.x === 'number' ? `${props.x}px` : 'unset')};

  will-change: top, bottom, left, right, width, height;
  background-color: ${(props) => props.theme.ratsel.floating.background};
  border-radius: ${(props) => props.theme.ratsel.floating.borderRadius};
  padding: ${(props) => props.theme.ratsel.floating.padding};
  box-shadow: ${(props) => props.theme.ratsel.floating.boxShadow};
  z-index: ${(props) => props.theme.ratsel.floating.zIndex};
  transition:
    opacity 300ms ease 0s,
    transform 300ms ease 0s;
  opacity: 1;
  outline: none;
`;
