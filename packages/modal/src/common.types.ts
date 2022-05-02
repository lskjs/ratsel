import { ComponentType } from 'react';

import { ModalCloseIconProps } from './components/ModalCloseIcon/ModalCloseIcon';
import { ModalContentProps } from './components/ModalContent';
import { ModalDescriptionProps } from './components/ModalDescription';
import { ModalFooterProps } from './components/ModalFooter';
import { ModalHelpProps } from './components/ModalHelp';
import { ModalImageProps } from './components/ModalImage';
import { ModalInnerProps } from './components/ModalInner';
import { ModalSubtitleProps } from './components/ModalSubtitle';
import { ModalTriggerProps } from './components/ModalTrigger';

export type AlignType = 'center' | 'left' | 'right';

export interface ModalComponents {
  Title: ComponentType;
  Subtitle: ComponentType<ModalSubtitleProps>;
  Image: ComponentType<ModalImageProps>;
  Content: ComponentType<ModalContentProps>;
  Description: ComponentType<ModalDescriptionProps>;
  Help: ComponentType<ModalHelpProps>;
  Footer: ComponentType<ModalFooterProps>;
  Trigger: ComponentType<ModalTriggerProps>;
  Inner: ComponentType<ModalInnerProps>;
  InnerWrapper: ComponentType;
  CloseIcon: ComponentType<ModalCloseIconProps>;
}

export interface ModalContext {
  toggle(): void;
  open(): void;
  close(): void;
}
