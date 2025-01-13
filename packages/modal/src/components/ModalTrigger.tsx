import React, { ComponentType, PropsWithChildren, ReactNode, SyntheticEvent } from 'react';

import { ModalContext } from '../common.types';
import { contextToProps } from '../ModalContext';

type ClickHandler = (event: SyntheticEvent<HTMLElement>) => void;

interface PartialAnyComponent {
  onClick?: ClickHandler;
  [key: string]: unknown;
}

export interface ModalTriggerProps {
  type?: string;
  disabled?: boolean;
  as?: ComponentType<PartialAnyComponent> | string;
  onClick?: ClickHandler;
}

type ModalTriggerAllProps = ModalTriggerProps & {
  modal: ModalContext;
  children: ReactNode;
};

export const ModalTrigger = contextToProps('modal')(({
  children,
  modal,
  type,
  disabled,
  as: Tag = 'span',
  onClick,
  ...props
}: PropsWithChildren<ModalTriggerAllProps>) => {
  const handleClick: ClickHandler = (event) => {
    if (onClick) onClick(event);
    if (disabled) return;
    if (event.isDefaultPrevented()) return;
    if (type === 'open') {
      modal.open();
    } else if (type === 'close') {
      modal.close();
    } else {
      modal.toggle();
    }
  };

  return (
    <Tag onClick={handleClick} {...props}>
      {children}
    </Tag>
  );
});

export default ModalTrigger;
