import {
  arrow as arrowMiddleware,
  autoUpdate,
  flip as flipMiddleware,
  FloatingContext,
  FloatingFocusManager,
  offset as offsetMiddleware,
  Placement,
  shift as shiftMiddleware,
  useClick,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
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
  offset?: number;
  defaultOpen?: boolean;
  components?: PopoverComponents;
  middlewares?: string[];
  interactions?: string[];
}

export const Popover: FC<PopoverProps> = ({
  trigger,
  children,
  placement = 'bottom',
  offset = 0,
  defaultOpen = false,
  components,
  middlewares = ['offset', 'flip', 'shift'],
  interactions = ['click', 'role', 'dismiss'],
}) => {
  const arrowRef = useRef(null);
  const [open, onOpenChange] = useState(defaultOpen);

  const allMiddlewares = {
    offset: () => offsetMiddleware(offset),
    flip: () => flipMiddleware(),
    shift: () => shiftMiddleware(),
    arrow: () => arrowMiddleware({ element: arrowRef }),
  };

  const _middlewares = middlewares?.map((middlewareKey: string) =>
    allMiddlewares[middlewareKey](),
  );

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
    middleware: _middlewares,
    placement,
  });

  const allInteractions = {
    click: (ctx: FloatingContext) => useClick(ctx),
    role: (ctx: FloatingContext) => useRole(ctx),
    dismiss: (ctx: FloatingContext) => useDismiss(ctx),
    hover: (ctx: FloatingContext) => useHover(ctx),
    focus: (ctx: FloatingContext) => useFocus(ctx),
  };

  const _interactions = interactions?.map((interactionKey: string) =>
    allInteractions[interactionKey](context),
  );

  const { getReferenceProps, getFloatingProps } =
    useInteractions(_interactions);

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

  const handleClose = () => onOpenChange(false);

  const PopoverComponent = components?.Popover || PopoverBase;
  let child = children;
  if (typeof children === 'function')
    child = children({ close: handleClose, isOpen: open });
  return (
    <Fragment>
      {cloneElement(
        trigger as ReactElement,
        getReferenceProps({
          ref: reference,
          ...trigger?.props,
          isOpen: open,
          close: handleClose,
        }),
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
            {child}
            {middlewares.includes('arrow') && (
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
