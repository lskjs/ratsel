// @ts-nocheck
import { styled } from '@ratsel/core';

export const ModalInnerWrapper = styled('div')`
  background: ${(props) => props.theme.ratsel.modal.background};
  border-radius: ${(props) => props.theme.ratsel.modal.borderRadius};
  box-shadow: ${(props) => props.theme.ratsel.modal.boxShadow};
`;
