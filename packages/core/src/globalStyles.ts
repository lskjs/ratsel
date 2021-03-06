import { css } from '@emotion/react';

import { Theme } from './themes/theme';

export const globalStyles = (theme: Theme) => css`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body,
  button,
  a {
    font-family: ${theme.ratsel.fonts.main};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.ratsel.fonts.headings};
  }

  pre,
  code {
    font-family: ${theme.ratsel.fonts.monospace};
  }

  * {
    box-sizing: border-box;
  }
`;
