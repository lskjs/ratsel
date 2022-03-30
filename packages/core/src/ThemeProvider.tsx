import React, { useMemo } from 'react';
import { ThemeProvider as EmotionThemeProvider, Global, SerializedStyles } from '@emotion/react';
import type { FC } from 'react';
import type { Theme } from '@emotion/react';
import { globalStyles as defaultGlobalStyles } from './globalStyles';
import { defaultTheme } from './defaultTheme';

interface ThemeProviderProps {
  theme?: Partial<Theme> | ((outerTheme: Theme) => Theme);
  globalStyles?: SerializedStyles;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  theme,
  globalStyles = defaultGlobalStyles
}) => {
  const memoizedTheme = useMemo(() => {
    let composedTheme = theme || defaultTheme;
    if (theme && typeof theme === 'function') {
      composedTheme = theme(defaultTheme);
    }
    return (parentTheme: Theme) => ({
      ...parentTheme,
      [Symbol.for('ratsel')]: composedTheme,
    });
  }, [theme]);

  return (
    <EmotionThemeProvider theme={memoizedTheme}>
      <Global styles={globalStyles} />
      {children}
    </EmotionThemeProvider>
  );
};
