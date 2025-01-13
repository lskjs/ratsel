import React, { ReactNode } from 'react';

import { ModalComponents, ModalContext } from '../common.types';
import { contextToProps } from '../ModalContext';

export interface ModalInnerProps {
  title?: ReactNode | string;
  subtitle?: ReactNode | string;
  image?: string;
  content?: ReactNode | string;
  footer?: ReactNode | string;
}

interface ChildrenArgs {
  modal: ModalContext;
}

type ModalInnerAllProps = ModalInnerProps & {
  Modal: ModalComponents;
  modal: ModalContext;
  children?: ReactNode | ((args: ChildrenArgs) => ReactNode);
};

export const ModalInner = contextToProps(
  'Modal',
  'modal',
)(({ Modal, modal, title, subtitle, image, content, footer, children }: ModalInnerAllProps) => {
  if (children) {
    if (typeof children === 'function') {
      return children({ modal });
    }
    return children;
  }
  return (
    <>
      {title && <Modal.Title>{title}</Modal.Title>}
      {subtitle && <Modal.Subtitle>{subtitle}</Modal.Subtitle>}
      {image && <Modal.Image src={image} />}
      {content && <Modal.Content>{content}</Modal.Content>}
      {footer && <Modal.Footer>{footer}</Modal.Footer>}
    </>
  );
});
