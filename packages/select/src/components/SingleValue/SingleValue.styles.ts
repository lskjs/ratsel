// @ts-nocheck
import { styled } from '@ratsel/core';

interface OptionProps {
  value?: string | number | undefined;
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
  font-family: ${(props) => props.theme.ratsel.fonts.main};
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  background-color: ${(props) => props.theme.ratsel.select.colors.background};
  letter-spacing: -0.1px;
  color: ${(props) =>
    props.value === '@@NULL@@'
      ? props.theme.ratsel.select.colors.placeholder
      : props.theme.ratsel.select.colors.base};
`;

export const Title = styled('div')`
  margin-left: 0px;
  text-overflow: ellipsis;
  overflow: hidden;
`;
