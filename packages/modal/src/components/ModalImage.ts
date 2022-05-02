import { styled } from '@ratsel/core';

export interface ModalImageProps {
  color?: string;
  src?: string;
}

export const ModalImage = styled('div', {
  shouldForwardProp: (prop) => !['src', 'color'].includes(prop as string),
})<ModalImageProps>`
  position: relative;
  min-height: 200px;
  max-height: 300px;
  margin-top: 8px;
  background-size: cover;
  background-position: center;
  background-color: ${(props) =>
    props.color || props.theme.ratsel.modal.image.background};
  background-image: ${(props) => (props.src ? `url(${props.src})` : 'none')};
`;
