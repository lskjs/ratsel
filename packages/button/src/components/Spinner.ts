import { keyframes, styled } from '@ratsel/core';

interface SpinnerProps {
  inverse: boolean;
}

const spin = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled('div')<SpinnerProps>`
  width: 24px;
  height: 24px;

  border: 3px solid
    ${(props) =>
      props.inverse
        ? props.theme.ratsel.button.spinner.inverseBackground
        : props.theme.ratsel.button.spinner.background};
  border-top: 3px solid
    ${(props) =>
      props.inverse
        ? props.theme.ratsel.button.spinner.inverseAccent
        : props.theme.ratsel.button.spinner.accent};
  border-radius: 50%;

  animation: ${spin} 1s infinite linear;
`;
