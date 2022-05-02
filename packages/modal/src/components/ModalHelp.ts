import { styled } from '@ratsel/core';

import { AlignType } from '../common.types';

export interface ModalHelpProps {
  align?: AlignType;
}

export const ModalHelp = styled('div', {
  shouldForwardProp: (prop) => !['align'].includes(prop as string),
})<ModalHelpProps>`
  padding: 12px 16px 32px;
  position: relative;
  font-family: ${(props) => props.theme.ratsel.fonts.main};
  text-align: ${(props) => props.align || 'left'};
  display: flex;
  flex-direction: column;
  align-items: ${(props) => {
    switch (props.align) {
      case 'right':
        return 'flex-end';
      case 'center':
        return 'center';
      default:
        return 'flex-start';
    }
  }};
  font-size: ${(props) => props.theme.ratsel.modal.help.fontSize};
  font-weight: ${(props) => props.theme.ratsel.modal.help.fontWeight};
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: -0.1px;
  color: ${(props) => props.theme.ratsel.modal.help.color};
  background-color: ${(props) => props.theme.ratsel.modal.help.background};

  > * {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
`;
