import { make, styled, css } from '@ratsel/core';
import type { PropsWithTheme } from '@ratsel/core';
import type { ReactNode } from 'react';

export interface BaseProps {
  variant?: 'primary' | 'secondary' | 'shadow';
  bordered?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

const variants = {
  primary: ({ theme }: PropsWithTheme) => css`
    background: ${theme.ratsel.button.variants.primary.background};
    color: ${theme.ratsel.button.variants.primary.color};
    &:hover {
      background: ${theme.ratsel.button.variants.primary.hoverBackground};
      color: ${theme.ratsel.button.variants.primary.hoverColor};
    }
    &:focus {
      background: ${theme.ratsel.button.variants.primary.focusBackground};
      color: ${theme.ratsel.button.variants.primary.focusColor};
    }
    &:active {
      background: ${theme.ratsel.button.variants.primary.activeBackground};
      color: ${theme.ratsel.button.variants.primary.activeColor};
    }
    &:disabled {
      background: ${theme.ratsel.button.variants.secondary.background};
      color: ${theme.ratsel.button.variants.secondary.color};
    }
  `,
  secondary: ({ theme }: PropsWithTheme) => css`
    background: ${theme.ratsel.button.variants.secondary.background};
    color: ${theme.ratsel.button.variants.secondary.color};
    &:hover {
      background: ${theme.ratsel.button.variants.secondary.hoverBackground};
      color: ${theme.ratsel.button.variants.secondary.hoverColor};
    }
    &:focus {
      background: ${theme.ratsel.button.variants.secondary.focusBackground};
      color: ${theme.ratsel.button.variants.secondary.focusColor};
    }
    &:active {
      background: ${theme.ratsel.button.variants.secondary.activeBackground};
      color: ${theme.ratsel.button.variants.secondary.activeColor};
    }
  `,
  shadow: ({ theme }: PropsWithTheme) => css`
    background: ${theme.ratsel.button.variants.shadow.background};
    color: ${theme.ratsel.button.variants.shadow.color};
    &:hover {
      background: ${theme.ratsel.button.variants.shadow.hoverBackground};
      color: ${theme.ratsel.button.variants.shadow.hoverColor};
    }
    &:focus {
      background: ${theme.ratsel.button.variants.shadow.focusBackground};
      color: ${theme.ratsel.button.variants.shadow.focusColor};
    }
    &:active {
      background: ${theme.ratsel.button.variants.shadow.activeBackground};
      color: ${theme.ratsel.button.variants.shadow.activeColor};
    }
  `,
};

export const Base = styled('button', {
  shouldForwardProp: (prop) => !['variant', 'bordered', 'iconLeft', 'iconRight'].includes(prop as string),
})<BaseProps>`
  display: flex;
  align-items: center;
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
    if (props.iconRight && !props.iconLeft) return props.theme.ratsel.button.paddings.baseIcon;
    if (props.iconLeft) return '0px';
    return props.theme.ratsel.button.paddings.base;
  }};
  padding-right: ${(props) => {
    if (props.iconLeft && !props.iconRight) return props.theme.ratsel.button.paddings.baseIcon;
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

  &:disabled {
    filter: grayscale(1) opacity(0.4);
    pointer-events: none;
    user-select: none;
  }

  transition: background 200ms ease-out, color 200ms ease-out;
  will-change: background, color;

  ${(props) => make(variants, props.variant, 'primary')}
`;
