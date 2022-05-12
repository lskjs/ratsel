import { styled } from '@ratsel/core';

interface IconButtonProps {
  order?: number;
}

export const IconButton = styled('button', {
  shouldForwardProp: (prop) => !['order'].includes(prop as string),
})<IconButtonProps>`
  display: flex;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  apperance: none;
  -webkit-apperance: none;
  color: ${(props) => props.theme.ratsel.timePicker.icon.color};
  cursor: pointer;
  order: ${(props) => props.order || 0};
`;
