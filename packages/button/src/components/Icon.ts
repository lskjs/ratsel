import { styled } from '@ratsel/core';

export const Icon = styled('span')`
  padding: 0 ${(props) => props.theme.ratsel.button.paddings.icon};
  display: flex;
  font-size: 24px;
  > svg {
    display: flex;
  }
`;
