import { styled } from '@ratsel/core';
import { PropsWithChildren } from 'react';

export const ModalInnerWrapper = styled('div')<PropsWithChildren>`
  background: ${(props) => props.theme.ratsel.modal.background};
  border-radius: ${(props) => props.theme.ratsel.modal.borderRadius};
  box-shadow: ${(props) => props.theme.ratsel.modal.boxShadow};
`;
