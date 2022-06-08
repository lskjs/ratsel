export interface FloatingTheme {
  background: string;
  borderRadius: string;
  padding: string;
  boxShadow: string;
  arrowSize: string;
  tooltipArrowSize: string;
  tooltipBackground: string;
  tooltipColor: string;
  tooltipPadding: string;
  tooltipFontSize: string;
  tooltipFontWeight: string;
  tooltipLineHeight: string;
}

export const floatingTheme: FloatingTheme = {
  background: '#fff',
  borderRadius: '6px',
  padding: '8px 0',
  boxShadow: '-8px 12px 50px -3px hsla(146, 38.5%, 69.0%, 0.32)',
  arrowSize: '14px',
  tooltipArrowSize: '12px',
  tooltipBackground: '#202020',
  tooltipColor: '#fff',
  tooltipPadding: '6px 8px',
  tooltipFontSize: '9px',
  tooltipFontWeight: '400',
  tooltipLineHeight: '12px',
};
