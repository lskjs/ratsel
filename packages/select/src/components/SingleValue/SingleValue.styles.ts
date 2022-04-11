import { styled } from '@ratsel/core';

interface OptionProps {
  value?: string | number | undefined,
}

export const Option = styled('div', {
  shouldForwardProp: (prop) => !['value'].includes(prop as string),
})<OptionProps>`
  display: flex;
  align-items: center;
  overflow: hidden;
  border: none;

  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-family: 'Gotham Pro', Helvetica, Arial;
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  background-color: #ffffff;
  letter-spacing: -0.1px;
  color: ${(p) => p.value === '@@NULL@@' ? '#808080' : '#4a4a4a'};
`;

export const Title = styled('div')`
  margin-left: 0px;
  text-overflow: ellipsis;
  overflow: hidden;
`;