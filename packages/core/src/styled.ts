import emotionStyled from '@emotion/styled';
import {
  withTheme as emotionWithTheme,
  useTheme as emotionUseTheme,
} from '@emotion/react';

import type {
  CreateStyled as BaseCreateStyled,
  CreateStyledComponent,
} from '@emotion/styled/types/base';
import type { DistributiveOmit, PropsOf } from '@emotion/react';
import type { InnerTheme } from './themes/theme';

export type StyledTags = {
  [Tag in keyof JSX.IntrinsicElements]: CreateStyledComponent<
    {
      theme?: InnerTheme
      as?: React.ElementType
    },
    JSX.IntrinsicElements[Tag]
  >
}

export interface CreateStyled extends BaseCreateStyled, StyledTags {}



export type withThemeType = <
  C extends React.ComponentType<React.ComponentProps<C>>
>(
  component: C
) => React.FC<DistributiveOmit<PropsOf<C>, 'theme'> & { theme?: InnerTheme }>


export const styled: CreateStyled = emotionStyled as CreateStyled;
export const withTheme: withThemeType = emotionWithTheme as withThemeType;
export const useTheme: () => InnerTheme = emotionUseTheme as unknown as () => InnerTheme;
