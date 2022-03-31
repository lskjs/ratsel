export interface ButtonThemeVariant {
  background: string;
  color: string;
  hoverBackground: string;
  hoverColor: string;
  focusBackground: string;
  focusColor: string;
  activeBackground: string;
  activeColor: string;
}

export interface ButtonThemePaddings {
  base: string;
  icon: string;
  baseIcon: string;
  vertical: string;
  verticalIcon: string;
}

export interface ButtonTheme {
  fontWeight: number;
  fontSize: string;
  focusShadow: string;
  borderColor: string;
  paddings: ButtonThemePaddings;
  variants: {
    [variant: string]: ButtonThemeVariant;
  };
}

export const buttonTheme: ButtonTheme = {
  fontWeight: 600,
  fontSize: '13px',
  focusShadow: '0 0 4px hsl(160, 76%, 52%)',
  borderColor: 'hsl(151, 49.3%, 46.5%)',
  paddings: {
    base: '24px',
    icon: '8px',
    baseIcon: '12px',
    vertical: '12px',
    verticalIcon: '8px',
  },
  variants: {
    primary: {
      background: 'hsl(151, 49.3%, 46.5%)',
      color: 'hsl(137, 72.0%, 94.0%)',
      hoverBackground: 'hsl(151, 49.3%, 46.5%)',
      hoverColor: 'hsl(137, 72.0%, 94.0%)',
      focusBackground: 'hsl(151, 49.3%, 46.5%)',
      focusColor: 'hsl(137, 72.0%, 94.0%)',
      activeBackground: 'hsl(151, 55.0%, 41.5%)',
      activeColor: 'hsl(137, 72.0%, 94.0%)',
    },
    secondary: {
      background: 'hsl(120, 7%, 89%)',
      color: 'hsl(110, 25%, 9%)',
      hoverBackground: 'hsl(120, 5%, 85%)',
      hoverColor: 'hsl(110, 25%, 9%)',
      focusBackground: 'hsl(120, 5%, 85%)',
      focusColor: 'hsl(110, 25%, 9%)',
      activeBackground: 'hsl(110, 5%, 77%)',
      activeColor: 'hsl(110, 25%, 9%)',
    },
    shadow: {
      background: 'transparent',
      color: 'hsl(151, 49.3%, 46.5%)',
      hoverBackground: 'hsl(120, 54%, 95%)',
      hoverColor: 'hsl(151, 49.3%, 46.5%)',
      focusBackground: 'hsl(120, 54%, 95%)',
      focusColor: 'hsl(151, 49.3%, 46.5%)',
      activeBackground: 'hsl(120, 45%, 91%)',
      activeColor: 'hsl(151, 49.3%, 46.5%)',
    },
  },
};
