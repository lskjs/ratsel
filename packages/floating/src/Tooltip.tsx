import {
  arrow,
  autoUpdate,
  FloatingPortal,
  offset,
  Placement,
  useFloating,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react-dom-interactions';
import React, {
  cloneElement,
  CSSProperties,
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
  isPortal?: boolean;
  labelStyle?: CSSProperties;
}

export const Tooltip: FC<TooltipProps> = ({
  children,
  label: Label,
  placement = 'top',
  offset: propOffset = 10,
  isPortal,
  labelStyle = {},
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

  const tooltipBase = open && (
    <TooltipBase
      {...getFloatingProps({
        ref: floating,
        style: {
          ...labelStyle,
          position: strategy,
          top: y ?? '',
          left: x ?? '',
        },
      })}
    >
      <>
        {_label}
        <TooltipArrow
          ref={arrowRef}
          staticSide={staticSide}
          x={middlewareData.arrow?.x}
          y={middlewareData.arrow?.y}
        />
      </>
    </TooltipBase>
  );

  return (
    <Fragment>
      {cloneElement(
        children,
        getReferenceProps({ ref: reference, ...children?.props }),
      )}
      {isPortal ? <FloatingPortal>{tooltipBase}</FloatingPortal> : tooltipBase}
    </Fragment>
  );
};
