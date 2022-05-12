import type { ButtonTheme } from './buttonTheme';
import { buttonTheme } from './buttonTheme';
import type { CalendarTheme } from './calendarTheme';
import { calendarTheme } from './calendarTheme';
import type { FloatingTheme } from './floatingTheme';
import { floatingTheme } from './floatingTheme';
import type { FontsTheme } from './fontsTheme';
import { fontsTheme } from './fontsTheme';
import type { ModalTheme } from './modalTheme';
import { modalTheme } from './modalTheme';
import type { SelectTheme } from './selectTheme';
import { selectTheme } from './selectTheme';
import type { TableTheme } from './tableTheme';
import { tableTheme } from './tableTheme';
import type { TimePickerTheme } from './timePickerTheme';
import { timePickerTheme } from './timePickerTheme';

export interface InnerTheme {
  fonts: FontsTheme;
  button: ButtonTheme;
  table: TableTheme;
  select: SelectTheme;
  floating: FloatingTheme;
  calendar: CalendarTheme;
  modal: ModalTheme;
  timePicker: TimePickerTheme;
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
  modal: modalTheme,
  timePicker: timePickerTheme,
};
