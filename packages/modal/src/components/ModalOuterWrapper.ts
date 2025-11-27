// eslint-disable-next-line import/no-unresolved
import sizes from '@lskjs/utils/sizes';
import { css, styled } from '@ratsel/core';
import { PropsWithChildren } from 'react';

export interface ModalOuterWrapperProps {
  size?: string;
}

const _sizes = {
  small: css`
    @media screen and (min-width: 768px) {
      width: 428px;
    }
  `,
  medium: css`
    @media screen and (min-width: 768px) {
      width: 576px;
    }
  `,
  large: css`
    @media screen and (min-width: 768px) {
      width: 872px;
    }
  `,
  custom: (props: ModalOuterWrapperProps) => css`
    @media screen and (min-width: 768px) {
      width: ${props.size}px;
    }
  `,
};

export const ModalOuterWrapper = styled('div', {
  shouldForwardProp: (prop) => !['size'].includes(prop as string),
})<PropsWithChildren<ModalOuterWrapperProps>>`
  margin: 60px auto;
  @media screen and (max-width: 576px) {
    margin-top: 0;
  }
  outline: none;
  position: relative;
  width: 100%;

  ${(props) => {
    if (typeof props.size === 'number') return _sizes.custom;
    if (sizes.is(props.size, 'small')) return _sizes.small;
    if (sizes.is(props.size, 'large')) return _sizes.large;
    return _sizes.medium;
  }}
`;
