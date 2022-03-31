import { fontsTheme } from './fontsTheme';
import { buttonTheme } from './buttonTheme';

import type { FontsTheme } from './fontsTheme';
import type { ButtonTheme } from './buttonTheme';

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
