import type { FC, ReactNode } from 'react';
import React, { SyntheticEvent, useState } from 'react';

import { Base, BaseProps } from './components/Base';
import { CheckIcon } from './components/CheckIcon';
import { CloseIcon } from './components/CloseIcon';
import { Icon } from './components/Icon';
import { Overlay } from './components/Overlay';
import { Spinner } from './components/Spinner';
import { isPromise } from './utils/isPromise';

export interface ButtonProps extends BaseProps {
  disabled?: boolean;
  icon?: ReactNode;
  status?: 'error' | 'success' | null;
  onClick?: (event: SyntheticEvent<HTMLElement>) => void;
}

interface ButtonState {
  loading: boolean;
  status: 'error' | 'success' | null;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  bordered,
  iconLeft,
  iconRight,
  icon,
  disabled,
  loading,
  status,
  onClick,
  minWidth,
  block,
  ...props
}) => {
  const [state, setState] = useState<ButtonState>({
    loading: false,
    status: null,
  });

  const handleSubmit = async (event: SyntheticEvent<HTMLElement>) => {
    if (!onClick) return;
    const promise = onClick(event);
    if (isPromise(promise as unknown as Promise<() => unknown>)) {
      setState({
        ...state,
        loading: true,
      });
      try {
        await promise;
        setState({
          ...state,
          loading: false,
          status: 'success',
        });
      } catch (error) {
        setState({
          ...state,
          loading: false,
          status: 'error',
        });
      } finally {
        setTimeout(() => {
          setState({
            ...state,
            loading: false,
            status: null,
          });
        }, 1000);
      }
    }
  };

  const loadingRender = loading || state.loading;
  const statusRender = status || state.status;
  const isOverlayRender = loadingRender || Boolean(statusRender);
  const inverse = ['primary'].includes(variant);

  return (
    <Base
      {...props}
      block={block}
      variant={variant}
      bordered={bordered}
      iconLeft={icon || iconLeft}
      iconRight={icon || iconRight}
      disabled={disabled}
      minWidth={minWidth}
      loading={isOverlayRender}
      onClick={isOverlayRender ? undefined : handleSubmit}
    >
      {isOverlayRender && (
        <Overlay variant={variant} status={statusRender}>
          {loadingRender && <Spinner inverse={inverse} />}
          {!loadingRender && statusRender === 'error' && <CloseIcon />}
          {!loadingRender && statusRender === 'success' && <CheckIcon />}
        </Overlay>
      )}
      {iconLeft && <Icon>{iconLeft}</Icon>}
      {!icon ? children : <Icon>{icon}</Icon>}
      {iconRight && <Icon>{iconRight}</Icon>}
    </Base>
  );
};

export default Button;
