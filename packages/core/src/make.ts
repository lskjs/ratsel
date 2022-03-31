import { css } from '@emotion/react';
import type { SerializedStyles } from '@emotion/react';

export const make = (
  obj: Record<string, SerializedStyles>,
  value?: string,
  defaultValue: string = 'default',
): SerializedStyles => {
  if (!obj || typeof obj !== 'object') return css``;
  if (!value || !obj[value] && defaultValue) return  obj[defaultValue] || css``;
  return obj[value];
};
