import { styled } from '@ratsel/core';

import { AlignType } from '../common.types';

export interface ModalDescriptionProps {
  align?: AlignType;
}

export const ModalDescription = styled('p', {
  shouldForwardProp: (prop) => !['align'].includes(prop as string),
})<ModalDescriptionProps>`
  padding: 8px 16px 0;
  margin: 0;
  font-family: ${(props) => props.theme.ratsel.fonts.main};
  font-size: ${(props) => props.theme.ratsel.modal.description.fontSize};
  font-weight: ${(props) => props.theme.ratsel.modal.description.fontWeight};
  font-style: normal;
  font-stretch: normal;
  line-height: 1.54;
  letter-spacing: -0.1px;
  text-align: ${(props) => props.align || 'left'};
  color: ${(props) => props.theme.ratsel.modal.description.color};
`;
