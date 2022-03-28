import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { make } from '@ratsel/core';

export interface BaseProps {
  variant?: 'primary' | 'secondary';
}

const variants = {
  primary: (props: any) => css`
    background: ${props.theme[Symbol.for('ratsel')].button.variants.primary.background};
    color: ${props.theme[Symbol.for('ratsel')].button.variants.primary.color};
  `,
};

export const Base = styled('button', {
  shouldForwardProp: (prop) => !['variant'].includes(prop as string),
})<BaseProps>`
  font-family: ${(props) => props.theme[Symbol.for('ratsel')].fonts.main};
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 40px;
  letter-spacing: -0.01em;

  ${(props) => make(variants, props.variant as string, 'primary')}
`;
