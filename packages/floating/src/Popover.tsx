import {
  arrow as arrowMiddleware,
  autoUpdate,
  flip as flipMiddleware,
  FloatingContext,
  FloatingFocusManager,
  FloatingPortal,
  offset as offsetMiddleware,
  Placement,
  shift as shiftMiddleware,
  Strategy,
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
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

import { BaseProps } from './base';
import { Arrow } from './components/Arrow';
import { PopoverBase } from './components/PopoverBase';

interface ChildrenArgs {
  close(): void;
  isOpen: boolean;
}

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
  strategy?: Strategy;
  isPortal?: boolean;
  onOpenChange?: (open: boolean, action: string) => void;
  children?: ReactNode | ((obj: ChildrenArgs) => ReactNode);
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
  strategy: propStrategy = 'absolute',
  isPortal = false,
  onOpenChange: propOnOpenChange,
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

  const handleOpenChange = (_open: boolean) => {
    onOpenChange(_open);
    if (propOnOpenChange) {
      const action = open ? 'close' : 'open';
      propOnOpenChange(_open, action);
    }
  };

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
    strategy: propStrategy,
    open,
    onOpenChange: handleOpenChange,
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

  let focusManagerProps: any = {
    context,
  };
  if (!isPortal) {
    focusManagerProps = {
      ...focusManagerProps,
      modal: false,
      order: ['reference', 'content'],
      returnFocus: false,
    };
  }
  const focusManager = (
    <FloatingFocusManager {...focusManagerProps}>
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
  );
  const content = open && focusManager;
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
      {isPortal ? <FloatingPortal>{content}</FloatingPortal> : content}
    </Fragment>
  );
};
