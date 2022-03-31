import { make, styled, css } from '@ratsel/core';
export interface BaseProps {
  variant?: 'primary' | 'secondary';
}

const variants = {
  primary: (props: any) => css`
    background: ${props.theme.ratsel.button.variants.primary.background};
    color: ${props.theme.ratsel.button.variants.primary.color};
  `,
};

// @ts-ignore
export const Base = styled('button', {
  shouldForwardProp: (prop) => !['variant', 'theme'].includes(prop as string),
})<BaseProps>`
  font-family: ${(props) => {
    // @ts-ignore
    return props.theme.ratsel.fonts.main;
  }};
  font-style: normal;
  font-weight: ${(props) => {
    // @ts-ignore
    return props.theme.ratsel.button.fontWeight;
  }};
  font-size: ${(props) => {
    // @ts-ignore
    return props.theme.ratsel.button.fontSize;
  }};
  line-height: 40px;
  letter-spacing: -0.01em;
  border-radius: 8px;
  border: none;
  padding: 0 24px;

  ${(props) => {
    // @ts-ignore
    return make(variants, props.variant, 'primary');
  }}
`;
