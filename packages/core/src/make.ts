import { css } from '@emotion/react';
import type { SerializedStyles } from '@emotion/react';
import type { Theme } from './themes/theme';

export interface PropsWithTheme {
  theme: Theme;
  [arg: string]: unknown;
}

export type MakeReturnType =
  | SerializedStyles
  | ((arg: PropsWithTheme) => SerializedStyles);

export const make = (
  obj: Record<string, MakeReturnType>,
  value?: string,
  defaultValue: string = 'default',
): SerializedStyles => {
  if (!obj || typeof obj !== 'object') return css``;
  if (!value || (!obj[value] && defaultValue)) {
    return (obj[defaultValue] || css``) as SerializedStyles;
  }
  return obj[value] as SerializedStyles;
};
