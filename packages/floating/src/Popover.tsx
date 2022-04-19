import {
  arrow as arrowMiddleware,
  autoUpdate,
  flip as flipMiddleware,
  FloatingFocusManager,
  offset as offsetMiddleware,
  Placement,
  shift as shiftMiddleware,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react-dom-interactions';
import React, {
  cloneElement,
  ComponentType,
  FC,
  Fragment,
  HTMLProps,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';

import { BaseProps } from './base';
import { Arrow } from './components/Arrow';
import { PopoverBase } from './components/PopoverBase';

export interface PopoverComponents {
  Popover?: ComponentType;
}

export interface PopoverProps extends BaseProps {
  placement?: Placement;
  arrow?: boolean;
  offset?: number;
  defaultOpen?: boolean;
  components: PopoverComponents;
}

export const Popover: FC<PopoverProps> = ({
  trigger,
  children,
  placement = 'bottom',
  arrow,
  offset = 0,
  defaultOpen = false,
  components,
}) => {
  const arrowRef = useRef(null);
  const [open, onOpenChange] = useState(defaultOpen);

  const middlewares = [
    offsetMiddleware(offset),
    flipMiddleware(),
    shiftMiddleware(),
  ];
  if (arrow) middlewares.push(arrowMiddleware({ element: arrowRef }));

  const {
    x,
    y,
    reference,
    floating,
    strategy,
    refs,
    update,
    context,
    middlewareData,
  } = useFloating({
    open,
    onOpenChange,
    middleware: middlewares,
    placement,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context),
    useRole(context),
    useDismiss(context),
  ]);

  useEffect(() => {
    if (refs.reference.current && refs.floating.current && open) {
      return autoUpdate(refs.reference.current, refs.floating.current, update);
    }
    return undefined;
  }, [open, update, refs.reference, refs.floating]);
  const staticSide = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
  }[(placement as string).split('-')[0]];

  const PopoverComponent = components?.Popover || PopoverBase;
  return (
    <Fragment>
      {cloneElement(
        trigger as ReactElement,
        getReferenceProps({ ref: reference, ...trigger?.props }),
      )}
      {open && (
        <FloatingFocusManager
          context={context}
          modal={false}
          order={['reference', 'content']}
          returnFocus={false}
        >
          <PopoverComponent
            {...getFloatingProps({
              ref: floating,
              position: strategy,
              y,
              x,
            } as HTMLProps<HTMLElement>)}
          >
            {children}
            {arrow && (
              <Arrow
                ref={arrowRef}
                staticSide={staticSide}
                x={middlewareData.arrow?.x}
                y={middlewareData.arrow?.y}
              />
            )}
          </PopoverComponent>
        </FloatingFocusManager>
      )}
    </Fragment>
  );
};
