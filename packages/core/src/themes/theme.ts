import type { ButtonTheme } from './buttonTheme';
import { buttonTheme } from './buttonTheme';
import type { FontsTheme } from './fontsTheme';
import { fontsTheme } from './fontsTheme';
import type { TableTheme } from './tableTheme';
import { tableTheme } from './tableTheme';

export interface InnerTheme {
  fonts: FontsTheme;
  button: ButtonTheme;
  table: TableTheme;
}

export interface Theme {
  ratsel: InnerTheme;
}

export const theme: InnerTheme = {
  fonts: fontsTheme,
  button: buttonTheme,
  table: tableTheme,
};
