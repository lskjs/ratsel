/* eslint-disable @typescript-eslint/ban-types */
import type {
  ComponentSelector,
  DistributiveOmit,
  Interpolation,
  PropsOf,
} from '@emotion/react';
import {
  useTheme as emotionUseTheme,
  withTheme as emotionWithTheme,
} from '@emotion/react';
import type { StyledOptions } from '@emotion/styled';
import emotionStyled from '@emotion/styled';
import { FilteringStyledOptions } from '@emotion/styled/types/base';

import type { Theme } from './themes/theme';

export interface StyledComponent<
  ComponentProps extends {},
  SpecificComponentProps extends {} = {},
  JSXProps extends {} = {},
> extends React.FC<ComponentProps & SpecificComponentProps & JSXProps>,
    ComponentSelector {
  withComponent<C extends React.ComponentClass<React.ComponentProps<C>>>(
    component: C,
  ): StyledComponent<
    ComponentProps & PropsOf<C>,
    {},
    { ref?: React.Ref<InstanceType<C>> }
  >;
  withComponent<C extends React.ComponentType<React.ComponentProps<C>>>(
    component: C,
  ): StyledComponent<ComponentProps & PropsOf<C>>;
  withComponent<Tag extends keyof JSX.IntrinsicElements>(
    tag: Tag,
  ): StyledComponent<ComponentProps, JSX.IntrinsicElements[Tag]>;
}

export interface CreateStyledComponent<
  ComponentProps extends {},
  SpecificComponentProps extends {} = {},
  JSXProps extends {} = {},
> {
  <AdditionalProps extends {} = {}>(
    ...styles: Array<
      Interpolation<
        ComponentProps &
          SpecificComponentProps &
          AdditionalProps & { theme: Theme }
      >
    >
  ): StyledComponent<
    ComponentProps & AdditionalProps,
    SpecificComponentProps,
    JSXProps
  >;

  (
    template: TemplateStringsArray,
    ...styles: Array<
      Interpolation<ComponentProps & SpecificComponentProps & { theme: Theme }>
    >
  ): StyledComponent<ComponentProps, SpecificComponentProps, JSXProps>;

  <AdditionalProps extends {}>(
    template: TemplateStringsArray,
    ...styles: Array<
      Interpolation<
        ComponentProps &
          SpecificComponentProps &
          AdditionalProps & { theme: Theme }
      >
    >
  ): StyledComponent<
    ComponentProps & AdditionalProps,
    SpecificComponentProps,
    JSXProps
  >;
}

export interface BaseCreateStyled {
  <
    C extends React.ComponentClass<React.ComponentProps<C>>,
    ForwardedProps extends keyof React.ComponentProps<C> = keyof React.ComponentProps<C>,
  >(
    component: C,
    options: FilteringStyledOptions<React.ComponentProps<C>, ForwardedProps>,
  ): CreateStyledComponent<
    Pick<PropsOf<C>, ForwardedProps> & {
      theme?: Theme;
    },
    {},
    {
      ref?: React.Ref<InstanceType<C>>;
    }
  >;

  <C extends React.ComponentClass<React.ComponentProps<C>>>(
    component: C,
    options?: StyledOptions<React.ComponentProps<C>>,
  ): CreateStyledComponent<
    PropsOf<C> & {
      theme?: Theme;
    },
    {},
    {
      ref?: React.Ref<InstanceType<C>>;
    }
  >;

  <
    C extends React.ComponentType<React.ComponentProps<C>>,
    ForwardedProps extends keyof React.ComponentProps<C> = keyof React.ComponentProps<C>,
  >(
    component: C,
    options: FilteringStyledOptions<React.ComponentProps<C>, ForwardedProps>,
  ): CreateStyledComponent<
    Pick<PropsOf<C>, ForwardedProps> & {
      theme?: Theme;
    }
  >;

  <C extends React.ComponentType<React.ComponentProps<C>>>(
    component: C,
    options?: StyledOptions<React.ComponentProps<C>>,
  ): CreateStyledComponent<
    PropsOf<C> & {
      theme?: Theme;
    }
  >;

  <
    Tag extends keyof JSX.IntrinsicElements,
    ForwardedProps extends keyof JSX.IntrinsicElements[Tag] = keyof JSX.IntrinsicElements[Tag],
  >(
    tag: Tag,
    options: FilteringStyledOptions<JSX.IntrinsicElements[Tag], ForwardedProps>,
  ): CreateStyledComponent<
    { theme?: Theme; as?: React.ElementType },
    Pick<JSX.IntrinsicElements[Tag], ForwardedProps>
  >;

  <Tag extends keyof JSX.IntrinsicElements>(
    tag: Tag,
    options?: StyledOptions<JSX.IntrinsicElements[Tag]>,
  ): CreateStyledComponent<
    { theme?: Theme; as?: React.ElementType },
    JSX.IntrinsicElements[Tag]
  >;
}

export type StyledTags = {
  [Tag in keyof JSX.IntrinsicElements]: CreateStyledComponent<
    {
      theme?: Theme;
      as?: React.ElementType;
    },
    JSX.IntrinsicElements[Tag]
  >;
};

export interface CreateStyled extends BaseCreateStyled, StyledTags {}

export type withThemeType = <
  C extends React.ComponentType<React.ComponentProps<C>>,
>(
  component: C,
) => React.FC<DistributiveOmit<PropsOf<C>, 'theme'> & { theme?: Theme }>;

export const styled: CreateStyled = emotionStyled;
export const withTheme: withThemeType = emotionWithTheme as withThemeType;
export const useTheme: () => Theme = emotionUseTheme as unknown as () => Theme;
