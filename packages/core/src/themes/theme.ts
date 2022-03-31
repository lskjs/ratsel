import type { ButtonTheme } from './buttonTheme';
import { buttonTheme } from './buttonTheme';
import type { FontsTheme } from './fontsTheme';
import { fontsTheme } from './fontsTheme';

export interface InnerTheme {
  fonts: FontsTheme;
  button: ButtonTheme;
}

export interface Theme {
  ratsel: InnerTheme;
}

export const theme: InnerTheme = {
  fonts: fontsTheme,
  button: buttonTheme,
};
