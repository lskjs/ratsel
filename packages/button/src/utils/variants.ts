import type { PropsWithTheme } from '@ratsel/core';
import { css } from '@ratsel/core';

export const variants = {
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
  danger: ({ theme }: PropsWithTheme) => css`
    background: ${theme.ratsel.button.variants.danger.background};
    color: ${theme.ratsel.button.variants.danger.color};
    &:hover {
      background: ${theme.ratsel.button.variants.danger.hoverBackground};
      color: ${theme.ratsel.button.variants.danger.hoverColor};
    }
    &:focus {
      background: ${theme.ratsel.button.variants.danger.focusBackground};
      color: ${theme.ratsel.button.variants.danger.focusColor};
    }
    &:active {
      background: ${theme.ratsel.button.variants.danger.activeBackground};
      color: ${theme.ratsel.button.variants.danger.activeColor};
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
