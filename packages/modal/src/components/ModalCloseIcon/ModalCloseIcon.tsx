import React, { FC, HTMLAttributes } from 'react';

import { CloseIcon } from '../../icons/CloseIcon';
import { CloseButton } from './ModalCloseIcon.styles';

export type ModalCloseIconProps = HTMLAttributes<HTMLButtonElement>;

export const ModalCloseIcon: FC<ModalCloseIconProps> = (props) => (
  <CloseButton {...props}>
    <CloseIcon />
  </CloseButton>
);
