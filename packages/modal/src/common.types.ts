import { ComponentType, PropsWithChildren } from 'react';

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
  Title: ComponentType<PropsWithChildren>;
  Subtitle: ComponentType<PropsWithChildren<ModalSubtitleProps>>;
  Image: ComponentType<PropsWithChildren<ModalImageProps>>;
  Content: ComponentType<PropsWithChildren<ModalContentProps>>;
  Description: ComponentType<PropsWithChildren<ModalDescriptionProps>>;
  Help: ComponentType<PropsWithChildren<ModalHelpProps>>;
  Footer: ComponentType<PropsWithChildren<ModalFooterProps>>;
  Trigger: ComponentType<PropsWithChildren<ModalTriggerProps>>;
  Inner: ComponentType<PropsWithChildren<ModalInnerProps>>;
  InnerWrapper: ComponentType<PropsWithChildren>;
  CloseIcon: ComponentType<PropsWithChildren<ModalCloseIconProps>>;
}

export interface ModalContext {
  toggle(): void;
  open(): void;
  close(): void;
}
