import { css, styled } from '@ratsel/core';

export interface IconProps {
  iconColor?: string;
  iconBackground?: string;
  iconPosition?: 'tl' | 'tr' | 'bl' | 'br';
}

export interface WrapperProps {
  shape?: 'circle' | 'rounded' | 'rounded-small' | 'square';
  objectFit?: string;
}

export const AvatarBody = styled('div')`
  > img {
    position: relative;
  }
`;

export const Icon = styled('div', {
  shouldForwardProp: (prop) =>
    !['iconColor', 'iconBackground', 'iconPosition'].includes(prop as string),
})<IconProps>`
  position: absolute;
  z-index: 2;
  width: 24px;
  height: 24px;
  > svg {
    border-radius: 50%;
    color: ${(p) => p.iconColor};
    background-color: ${(p) => p.iconBackground};
  }
  ${(p) => {
    switch (p.iconPosition) {
      case 'tl':
        return css`
          top: 0px;
          left: 0px;
        `;
      case 'tr':
        return css`
          top: 0px;
          right: 0px;
        `;
      case 'bl':
        return css`
          bottom: 0px;
          left: 0px;
        `;
      case 'br':
        return css`
          bottom: 0px;
          right: 0px;
        `;
      default:
        return '';
    }
  }};
`;

export const Wrapper = styled('div', {
  shouldForwardProp: (prop) => !['shape', 'objectFit'].includes(prop as string),
})<WrapperProps>`
  height: 100%;
  > div {
    background: #f6f7f8;
    background: linear-gradient(
      to right,
      #f2f3fa,
      #f2f3fa 20%,
      #f2f3fa 62%,
      #e7e9f3 82%,
      #f2f3fa 100%
    );
    background-size: 1000px 640px;

    border-radius: ${(props) => {
      switch (props.shape) {
        case 'circle':
          return '100vw';
        case 'rounded':
          return '6px';
        case 'rounded-small':
          return '4px';
        default:
          return 0;
      }
    }};
  }
  .lazy-load-image-background {
    width: 100%;
    height: 100%;
    border-radius: ${(props) => {
      switch (props.shape) {
        case 'circle':
          return '100vw';
        case 'rounded':
          return '6px';
        case 'rounded-small':
          return '4px';
        default:
          return 0;
      }
    }};
  }

  .lazy-load-image-background > img {
    object-fit: ${(props) => props.objectFit || 'cover'} !important;
    border-radius: ${(props) => {
      switch (props.shape) {
        case 'circle':
          return '100vw';
        case 'rounded':
          return '6px';
        case 'rounded-small':
          return '4px';
        default:
          return 0;
      }
    }};
  }

  .lazy-load-image-background.opacity {
    opacity: 0;
  }

  .lazy-load-image-background.opacity.lazy-load-image-loaded {
    opacity: 1;
    transition: opacity 0.3s;
  }
`;
