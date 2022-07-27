// @ts-nocheck
import { styled } from '@ratsel/core';

export const TooltipBase = styled('div')`
  font-family: ${(props) => props.theme.ratsel.fonts.main};
  font-weight: ${(props) => props.theme.ratsel.floating.tooltipFontWeight};
  font-size: ${(props) => props.theme.ratsel.floating.tooltipFontSize};
  line-height: ${(props) => props.theme.ratsel.floating.tooltipLineHeight};
  letter-spacing: -0.01em;

  background-color: ${(props) => props.theme.ratsel.floating.tooltipBackground};
  border-radius: ${(props) => props.theme.ratsel.floating.borderRadius};
  padding: ${(props) => props.theme.ratsel.floating.tooltipPadding};
  color: ${(props) => props.theme.ratsel.floating.tooltipColor};
  z-index: ${(props) => props.theme.ratsel.floating.zIndex};
`;
