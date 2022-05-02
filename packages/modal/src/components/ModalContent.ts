// @ts-nocheck
import { styled } from '@ratsel/core';

export interface ModalContentProps {
  size?: 'large' | 'default';
  align?: 'left' | 'center' | 'right' | 'auto';
}

export const ModalContent = styled('div', {
  shouldForwardProp: (prop) => !['align', 'size'].includes(prop as string),
})<ModalContentProps>`
  padding: ${(props) => {
    switch (props.size) {
      case 'large':
        return '32px 16px 24px';
      default:
        return '16px';
    }
  }};
  position: relative;
  font-family: ${(props) => props.theme.ratsel.fonts.headings};
  text-align: ${(props) => props.align || 'left'};
  display: flex;
  flex-direction: column;
  align-items: ${(props) => {
    switch (props.align) {
      case 'left':
        return 'flex-start';
      case 'right':
        return 'flex-end';
      case 'center':
        return 'center';
      default:
        return 'auto';
    }
  }};
  font-size: ${(props) => props.theme.ratsel.modal.content.fontSize};
  font-weight: ${(props) => props.theme.ratsel.modal.content.fontWeight};
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: -0.1px;
  color: ${(props) => props.theme.ratsel.modal.content.color};
`;
