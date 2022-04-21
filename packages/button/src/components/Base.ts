import { css, make, styled } from '@ratsel/core';
import type { ReactNode } from 'react';

import { variants } from '../utils/variants';

export interface BaseProps {
  variant?: 'primary' | 'secondary' | 'shadow';
  bordered?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  loading?: boolean;
  block?: boolean;
  minWidth?: number;
}

export const Base = styled('button', {
  shouldForwardProp: (prop) =>
    ![
      'variant',
      'bordered',
      'iconLeft',
      'iconRight',
      'loading',
      'block',
      'minWidth',
      'close',
      'isOpen',
    ].includes(prop as string),
})<BaseProps>`
  width: ${(props) => (props.block ? '100%' : 'auto')};
  min-width: ${(props) => (props.minWidth ? `${props.minWidth}px` : 'auto')};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${(props) => props.theme.ratsel.fonts.main};
  font-style: normal;
  font-weight: ${(props) => props.theme.ratsel.button.fontWeight};
  font-size: ${(props) => props.theme.ratsel.button.fontSize};
  letter-spacing: -0.01em;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  outline: none;
  padding-left: ${(props) => {
    if (props.iconRight && !props.iconLeft)
      return props.theme.ratsel.button.paddings.baseIcon;
    if (props.iconLeft) return '0px';
    return props.theme.ratsel.button.paddings.base;
  }};
  padding-right: ${(props) => {
    if (props.iconLeft && !props.iconRight)
      return props.theme.ratsel.button.paddings.baseIcon;
    if (props.iconRight) return '0px';
    return props.theme.ratsel.button.paddings.base;
  }};

  padding-top: ${(props) =>
    props.iconLeft || props.iconRight
      ? props.theme.ratsel.button.paddings.verticalIcon
      : props.theme.ratsel.button.paddings.vertical};
  padding-bottom: ${(props) =>
    props.iconLeft || props.iconRight
      ? props.theme.ratsel.button.paddings.verticalIcon
      : props.theme.ratsel.button.paddings.vertical};

  box-shadow: ${(props) => {
    if (props.bordered) {
      return `inset 0 0 0 1px ${props.theme.ratsel.button.borderColor}`;
    }
    return 'none';
  }};

  &:focus {
    box-shadow: ${(props) => {
      if (props.bordered) {
        return `inset 0 0 0 1px ${props.theme.ratsel.button.borderColor}, ${props.theme.ratsel.button.focusShadow}`;
      }
      return props.theme.ratsel.button.focusShadow;
    }};
  }

  ${(props) =>
    props.loading
      ? css`
          color: transparent !important;
        `
      : css``}

  &:disabled {
    filter: grayscale(1) opacity(0.4);
    pointer-events: none;
    user-select: none;
  }

  transition: background 200ms ease-out, color 200ms ease-out;
  will-change: background, color;

  ${(props) => make(variants, props.variant, 'primary')}
`;
