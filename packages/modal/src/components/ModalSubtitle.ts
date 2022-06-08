import { styled } from '@ratsel/core';
import { PropsWithChildren } from 'react';

import { AlignType } from '../common.types';

export interface ModalSubtitleProps {
  align?: AlignType;
}

export const ModalSubtitle = styled('h2', {
  shouldForwardProp: (prop) => !['align'].includes(prop as string),
})<PropsWithChildren<ModalSubtitleProps>>`
  padding: 8px 16px 0;
  margin: 0;
  font-family: ${(props) => props.theme.ratsel.fonts.main};
  font-size: ${(props) => props.theme.ratsel.modal.subtitle.fontSize};
  font-weight: ${(props) => props.theme.ratsel.modal.subtitle.fontWeight};
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: -0.1px;
  color: ${(props) => props.theme.ratsel.modal.subtitle.color};
  text-align: ${(props) => props.align || 'left'};
`;
