import { styled } from '@ratsel/core';

export const ModalTitle = styled('div')`
  padding: ${(props) =>
    `11px ${props.theme.ratsel.modal.title.height} 11px 16px`};
  margin: 0;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.ratsel.modal.title.background};
  height: ${(props) => props.theme.ratsel.modal.title.height};
  font-family: ${(props) => props.theme.ratsel.fonts.main};
  font-size: ${(props) => props.theme.ratsel.modal.title.fontSize};
  font-weight: ${(props) => props.theme.ratsel.modal.title.fontWeight};
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: -0.1px;
  color: ${(props) => props.theme.ratsel.modal.title.color};
  box-sizing: border-box;
  box-shadow: inset 0px -1px 0px ${(props) => props.theme.ratsel.modal.title.borderColor};
  border-radius: ${(props) =>
    `${props.theme.ratsel.modal.borderRadius} ${props.theme.ratsel.modal.borderRadius} 0 0`};
`;
