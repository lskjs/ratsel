interface CalendarWrapperTheme {
  padding: string;
  smallPadding: string;
}

interface CalendarNavigationTheme {
  height: string;
  smallHeight: string;
  margin: string;
  smallMargin: string;
  fontSize: string;
  smallFontSize: string;
  fontWeight: string;
}

interface CalendarWeekdaysTheme {
  height: string;
  smallHeight: string;
  weekdayPadding: string;
  fontSize: string;
  smallFontSize: string;
  fontWeight: string;
}

interface CalendarTileTheme {
  fontSize: string;
  smallFontSize: string;
  fontWeight: string;
  borderRadius: string;
}

interface CalendarColorsTheme {
  primary: string;
  navArrows: string;
  navYearArrows: string;
  leftover: string;
  main: string;
  gray: string;
  background: string;
  hoverBackground: string;
  tileHighlight: string;
  hoverHighlight: string;
}

export interface CalendarTheme {
  wrapper: CalendarWrapperTheme;
  navigation: CalendarNavigationTheme;
  weekdays: CalendarWeekdaysTheme;
  tile: CalendarTileTheme;
  colors: CalendarColorsTheme;
}

export const calendarTheme: CalendarTheme = {
  wrapper: {
    padding: '16px 12px 8px',
    smallPadding: '12px 8px 8px',
  },
  navigation: {
    height: '32px',
    smallHeight: '24px',
    margin: '0 0 16px',
    smallMargin: '0',
    fontSize: '13px',
    smallFontSize: '9px',
    fontWeight: '600',
  },
  weekdays: {
    height: '32px',
    smallHeight: '24px',
    weekdayPadding: '6px 0',
    fontSize: '13px',
    smallFontSize: '10px',
    fontWeight: '400',
  },
  tile: {
    fontSize: '13px',
    smallFontSize: '10px',
    fontWeight: '500',
    borderRadius: '4px',
  },
  colors: {
    primary: 'hsl(151, 49.3%, 46.5%)',
    navArrows: 'hsl(151, 49.3%, 46.5%)',
    navYearArrows: 'hsl(146, 38.5%, 69.0%)',
    leftover: 'hsl(0, 0%, 90.9%)',
    main: 'hsl(110, 25%, 9%)',
    gray: 'hsl(0, 0%, 85.8%)',
    background: '#ffffff',
    hoverBackground: 'hsl(0, 0%, 97.3%)',
    tileHighlight: 'hsl(140, 48.7%, 91.0%)',
    hoverHighlight: 'hsl(141, 43.7%, 86.0%)',
  },
};
