import { styled } from '@ratsel/core';
import { PropsWithChildren } from 'react';

export const CloseButton = styled('button')<PropsWithChildren>`
  width: ${(props) => props.theme.ratsel.modal.title.height};
  height: ${(props) => props.theme.ratsel.modal.title.height};
  position: absolute;
  top: 0;
  right: 0;
  appearance: none;
  --webkit-appearance: none;
  border: none;
  margin: 0;
  padding: 0;
  background: transparent;
  font-size: 24px;
  color: ${(props) => props.theme.ratsel.modal.title.color};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => `0 ${props.theme.ratsel.modal.borderRadius} 0 0`};
  z-index: 1;
`;
