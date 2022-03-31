// @ts-nocheck
import { styled, make } from '@ratsel/core';
import { variants } from '../utils/variants';
import { BaseProps } from './Base';

interface OverlayProps extends Pick<BaseProps, 'variant'> {
  status?: 'error' | 'success' | null;
}

export const Overlay = styled('div', {
  shouldForwardProp: prop => !['variant', 'status'].includes(prop as string),
})<OverlayProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  ${(props) => make(variants, props.variant, 'primary')}

  > svg {
    font-size: 24px;
    color: ${(props) => {
      if (!['primary'].includes(props.variant || 'primary')) {
        if (props.status === 'success') {
          return props.theme.ratsel.button.spinner.success;
        }
        if (props.status === 'error') {
          return props.theme.ratsel.button.spinner.error;
        }
        return 'inherit';
      }
      return props.theme.ratsel.button.spinner.inverseAccent;
    }};
  }
`;
