// @ts-nocheck
import { styled } from '@ratsel/core';

import { AlignType } from '../common.types';

export interface ModalFooterProps {
  align?: AlignType;
}

export const ModalFooter = styled('div', {
  shouldForwardProp: (prop) => !['align'].includes(prop as string),
})<ModalFooterProps>`
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
    margin-right: 12px;
  }
`;
