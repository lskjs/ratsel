import type { ButtonTheme } from './buttonTheme';
import { buttonTheme } from './buttonTheme';
import type { CalendarTheme } from './calendarTheme';
import { calendarTheme } from './calendarTheme';
import type { FloatingTheme } from './floatingTheme';
import { floatingTheme } from './floatingTheme';
import type { FontsTheme } from './fontsTheme';
import { fontsTheme } from './fontsTheme';
import type { SelectTheme } from './selectTheme';
import { selectTheme } from './selectTheme';
import type { TableTheme } from './tableTheme';
import { tableTheme } from './tableTheme';

export interface InnerTheme {
  fonts: FontsTheme;
  button: ButtonTheme;
  table: TableTheme;
  select: SelectTheme;
  floating: FloatingTheme;
  calendar: CalendarTheme;
}

export interface Theme {
  ratsel: InnerTheme;
}

export const theme: InnerTheme = {
  fonts: fontsTheme,
  button: buttonTheme,
  table: tableTheme,
  select: selectTheme,
  floating: floatingTheme,
  calendar: calendarTheme,
};
