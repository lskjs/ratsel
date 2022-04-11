import { styled, css } from '@ratsel/core';

interface OptionItemProps {
  selected: boolean;
  focused: boolean,
  type: string,
}

export const OptionItem = styled('div', {
  shouldForwardProp: (prop) => !['selected', 'focused'].includes(prop as string),
})<OptionItemProps>`
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100%;
  border: none;
  height: 48px;
  padding-left: 8px;
  z-index: 111111;

  font-family: 'Gotham Pro', Helvetica, Arial;
  background-color: ${(p) =>
    p.focused ? '#f0f0ff' : '#ffffff'};
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 3.6;
  letter-spacing: -0.1px;
  color: #4a4a4a;
  &:focus {
    background-color: #f0f0ff !important;
    color: #4a4a4a;
  }
  &:hover {
    background-color: #f0f0ff !important;
    color: #4a4a4a;
  }
  ${(p) =>
    p.selected &&
    css`
      background-color: #ffffff !important;
      color: #7070ff !important;
  `}
`;

export const Title = styled('div')`
  margin-left: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;