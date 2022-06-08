import { styled } from '@ratsel/core';
import { PropsWithChildren } from 'react';

import { AlignType } from '../common.types';

export interface ModalFooterProps {
  align?: AlignType;
}

export const ModalFooter = styled('div', {
  shouldForwardProp: (prop) => !['align'].includes(prop as string),
})<PropsWithChildren<ModalFooterProps>>`
  padding: 20px 16px 24px;
  position: relative;
  font-family: ${(props) => props.theme.ratsel.fonts.main};
  text-align: ${(props) => props.align || 'left'};
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => {
    switch (props.align) {
      case 'right':
        return 'flex-end';
      case 'center':
        return 'center';
      default:
        return 'flex-start';
    }
  }};
  color: ${(props) => props.theme.ratsel.modal.footer.color};

  > * + * {
    margin-left: 12px;
  }
`;
