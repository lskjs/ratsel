interface TableSectionTheme {
  height: string;
  padding: string;
  lineHeight: string;
  fontSize: string;
  fontWeight: string | number;
  background: string;
  color: string;
}

export interface TableTheme {
  borderWidth: string;
  borderColor: string;
  errorColor: string;
  firstLeftPadding: string;
  head: TableSectionTheme;
  body: TableSectionTheme;
  summary: TableSectionTheme;
}

export const tableTheme: TableTheme = {
  borderWidth: '1px',
  borderColor: 'hsl(210, 16.7%, 97.6%)',
  errorColor: 'hsl(358, 75.0%, 59.0%)',
  firstLeftPadding: '24px',
  head: {
    height: '47px',
    padding: '18px 10px',
    lineHeight: '16px',
    fontWeight: 400,
    fontSize: '11px',
    background: 'hsl(138, 62.5%, 96.9%)',
    color: 'hsl(151, 40.2%, 54.1%)',
  },
  body: {
    height: '64px',
    padding: '12px 10px',
    lineHeight: '16px',
    fontWeight: 400,
    fontSize: '11px',
    background: '#ffffff',
    color: 'hsl(206, 5.8%, 52.3%)',
  },
  summary: {
    height: '64px',
    padding: '12px 10px',
    lineHeight: '16px',
    fontWeight: 400,
    fontSize: '11px',
    background: 'hsl(210 16.7% 97.6%)',
    color: 'hsl(206, 5.8%, 52.3%)',
  },
};
