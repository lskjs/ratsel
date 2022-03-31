export interface ButtonThemeVariant {
  background: string;
  color: string;
}

export interface ButtonTheme {
  fontWeight: number;
  fontSize: string;
  variants: {
    [variant: string]: ButtonThemeVariant;
  };
}

export const buttonTheme: ButtonTheme = {
  fontWeight: 500,
  fontSize: '13px',
  variants: {
    primary: {
      background: 'hsl(151, 49.3%, 46.5%)',
      color: 'hsl(137, 72.0%, 94.0%)'
    },
  },
};
