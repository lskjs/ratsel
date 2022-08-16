import { styled } from '@ratsel/core';

interface WrapperProps {
  virtual: boolean;
}

export const Wrapper = styled('div', {
  shouldForwardProp: (prop) => !['virtual'].includes(prop as string),
})<WrapperProps>`
  .ka {
    overflow: ${(props) => (props.virtual ? 'hidden' : 'unset')};
  }

  .ka-table-wrapper {
    overflow-y: ${(props) => (props.virtual ? 'auto' : 'unset')};
  }
`;
