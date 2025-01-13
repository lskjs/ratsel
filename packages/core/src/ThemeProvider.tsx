import type { Theme as AnyTheme } from '@emotion/react';
import { Global, SerializedStyles, ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import type { FC, PropsWithChildren } from 'react';
import React, { useMemo } from 'react';

import { globalStyles as defaultGlobalStyles } from './globalStyles';
import type { InnerTheme, Theme } from './themes/theme';
import { theme as defaultTheme } from './themes/theme';

interface ThemeProviderProps {
  theme?: InnerTheme | ((outerTheme: Theme) => Theme);
  globalStyles?: SerializedStyles;
}

export const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({
  children,
  theme,
  globalStyles = defaultGlobalStyles,
}) => {
  const memoizedTheme = useMemo(
    () => (parentTheme: AnyTheme) => {
      let newTheme = {
        ...parentTheme,
        ratsel: defaultTheme,
      };
      if (theme && typeof theme === 'function') {
        newTheme = theme(newTheme);
      }
      if (theme && typeof theme !== 'function') {
        newTheme.ratsel = theme;
      }
      return newTheme;
    },
    [theme],
  );

  return (
    <EmotionThemeProvider theme={memoizedTheme}>
      <Global styles={globalStyles} />
      {children}
    </EmotionThemeProvider>
  );
};
