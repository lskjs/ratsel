import React, {
  FC,
  forwardRef,
  LegacyRef,
  PropsWithChildren,
  ReactNode,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

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

export const Button: FC<PropsWithChildren<ButtonProps>> = forwardRef(
  (
    {
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
    },
    ref,
  ) => {
    const isMounted = useRef(false);

    useEffect(() => {
      isMounted.current = true;
      return () => {
        isMounted.current = false;
      };
    }, []);
    const [state, setState] = useState<ButtonState>({
      loading: false,
      status: null,
    });

    const handleSubmit = async (event: SyntheticEvent<HTMLElement>) => {
      if (!onClick) return;
      const promise = onClick(event);
      if (isPromise(promise as unknown as Promise<() => unknown>)) {
        if (isMounted.current) {
          setState({
            ...state,
            loading: true,
          });
        }
        try {
          await promise;
          if (isMounted.current) {
            setState({
              ...state,
              loading: false,
              status: 'success',
            });
          }
        } catch (error) {
          if (isMounted.current) {
            setState({
              ...state,
              loading: false,
              status: 'error',
            });
          }
        } finally {
          setTimeout(() => {
            if (isMounted.current) {
              setState({
                ...state,
                loading: false,
                status: null,
              });
            }
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
        ref={ref as LegacyRef<HTMLButtonElement>}
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
  },
);

export default Button;
