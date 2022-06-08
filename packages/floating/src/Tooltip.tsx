import {
  arrow,
  autoUpdate,
  offset,
  Placement,
  useFloating,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react-dom-interactions';
import React, {
  cloneElement,
  FC,
  Fragment,
  ReactElement,
  ReactNode,
  useRef,
  useState,
} from 'react';

import { TooltipArrow } from './components/TooltipArrow';
import { TooltipBase } from './components/TooltipBase';

interface TooltipProps {
  label: string | ReactNode | (() => ReactNode);
  placement?: Placement;
  children: ReactElement;
  offset?: number;
}

export const Tooltip: FC<TooltipProps> = ({
  children,
  label: Label,
  placement = 'top',
  offset: propOffset = 10,
}) => {
  const arrowRef = useRef(null);
  const [open, setOpen] = useState(false);

  const { x, y, reference, floating, strategy, context, middlewareData } =
    useFloating({
      placement,
      open,
      onOpenChange: setOpen,
      middleware: [
        offset(propOffset),
        arrow({ element: arrowRef, padding: 5 }),
      ],
      whileElementsMounted: autoUpdate,
    });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context),
    useRole(context, { role: 'tooltip' }),
  ]);

  const staticSide = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
  }[(placement as string).split('-')[0]];

  let _label = Label;
  if (typeof Label === 'function') {
    _label = Label();
  }

  return (
    <Fragment>
      {cloneElement(
        children,
        getReferenceProps({ ref: reference, ...children?.props }),
      )}
      {open && (
        <TooltipBase
          {...getFloatingProps({
            ref: floating,
            style: {
              position: strategy,
              top: y ?? '',
              left: x ?? '',
            },
          })}
        >
          {_label}
          <TooltipArrow
            ref={arrowRef}
            staticSide={staticSide}
            x={middlewareData.arrow?.x}
            y={middlewareData.arrow?.y}
          />
        </TooltipBase>
      )}
    </Fragment>
  );
};
