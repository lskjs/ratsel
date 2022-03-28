import { SerializedStyles, Theme } from '@emotion/react';

interface PropsWithTheme {
  theme: Theme;
  [key: string]: unknown;
}

type MakeReturnType = SerializedStyles | string | ((arg: PropsWithTheme) => SerializedStyles);

export const make = (
  obj: Record<string, MakeReturnType>,
  value: string,
  defaultValue: string = 'default',
): MakeReturnType => {
  if (!obj || typeof obj !== 'object') return '';
  if (!obj[value] && defaultValue) return obj[defaultValue] || '';
  return obj[value];
};
