import { css, styled } from '@ratsel/core';

interface OptionItemProps {
  selected: boolean;
  focused: boolean;
  type: string;
}

export const OptionItem = styled('div', {
  shouldForwardProp: (prop) =>
    !['selected', 'focused'].includes(prop as string),
})<OptionItemProps>`
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100%;
  border: none;
  height: 48px;
  padding-left: 8px;
  z-index: 111111;
  cursor: default;

  font-family: ${(props) => props.theme.ratsel.fonts.main};
  background-color: ${(props) =>
    props.focused
      ? props.theme.ratsel.select.colors.hover
      : props.theme.ratsel.select.colors.background};
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 3.6;
  letter-spacing: -0.1px;
  color: ${(props) => props.theme.ratsel.select.colors.base};
  &:focus {
    background-color: ${(props) =>
      props.theme.ratsel.select.colors.hover} !important;
    color: ${(props) => props.theme.ratsel.select.colors.base};
  }
  &:hover {
    background-color: ${(props) =>
      props.theme.ratsel.select.colors.hover} !important;
    color: ${(props) => props.theme.ratsel.select.colors.base};
  }
  ${(props) =>
    props.selected &&
    css`
      background-color: ${props.theme.ratsel.select.colors
        .background} !important;
      color: ${props.theme.ratsel.select.colors.primary} !important;
    `}
`;

export const Title = styled('div')`
  margin-left: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
