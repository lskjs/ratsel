import type { Theme as AnyTheme } from '@emotion/react';
import {
  Global,
  SerializedStyles,
  ThemeProvider as EmotionThemeProvider,
} from '@emotion/react';
import type { FC } from 'react';
import React, { useMemo } from 'react';

import { globalStyles as defaultGlobalStyles } from './globalStyles';
import type { InnerTheme } from './themes/theme';
import { theme as defaultTheme } from './themes/theme';

interface ThemeProviderProps {
  theme?: Partial<InnerTheme> | ((outerTheme: InnerTheme) => InnerTheme);
  globalStyles?: SerializedStyles;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  theme,
  globalStyles = defaultGlobalStyles,
}) => {
  const memoizedTheme = useMemo(() => {
    let composedTheme = theme || defaultTheme;
    if (theme && typeof theme === 'function') {
      composedTheme = theme(defaultTheme);
    }
    return (parentTheme: AnyTheme) => ({
      ...parentTheme,
      ratsel: composedTheme,
    });
  }, [theme]);

  return (
    <EmotionThemeProvider theme={memoizedTheme}>
      <Global styles={globalStyles} />
      {children}
    </EmotionThemeProvider>
  );
};
