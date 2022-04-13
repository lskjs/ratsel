export interface SelectTheme {
  borderWidth: string;
  borderRadius: string;
  colors: {
    base: string;
    placeholder: string;
    border: string;
    primary: string;
    error: string;
    background: string;
    hover: string;
  };
}

export const selectTheme: SelectTheme = {
  borderWidth: '1px',
  borderRadius: '8px',
  colors: {
    base: 'hsl(110, 25%, 9%)',
    placeholder: 'hsl(57, 6.0%, 90.7%)',
    border: 'hsl(210, 16.7%, 97.6%)',
    error: 'hsl(358, 75.0%, 59.0%)',
    background: '#ffffff',
    primary: 'hsl(151, 49.3%, 46.5%)',
    hover: 'hsl(140, 48.7%, 91.0%)',
  },
};
