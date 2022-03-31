import { make, styled, css } from '.';
import { PropsWithTheme } from './make';

export interface TestProps {
  test?: 'main';
}

const variants = {
  main: (props: PropsWithTheme) => css`
    fontFamily: ${props.theme.ratsel.fonts.headings};
  `,
};

export const Test = styled('div', {
  shouldForwardProp: (prop) => !['test'].includes(prop as string),
})<TestProps>`
  font-family: ${(props) => props.theme.ratsel.fonts.main};
  ${(props) => make(variants, props.test, 'primary')}
`;
