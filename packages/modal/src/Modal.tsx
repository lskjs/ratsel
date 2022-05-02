import React, {
  forwardRef,
  ForwardRefExoticComponent,
  LegacyRef,
  PropsWithChildren,
  ReactNode,
  RefObject,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import ReactModal from 'react-modal';

import { ModalComponents, ModalContext } from './common.types';
import { ModalCloseIcon } from './components/ModalCloseIcon';
import { ModalContent } from './components/ModalContent';
import { ModalDescription } from './components/ModalDescription';
import { ModalFooter } from './components/ModalFooter';
import { ModalGlobalStyles } from './components/ModalGlobalStyles';
import { ModalHelp } from './components/ModalHelp';
import { ModalImage } from './components/ModalImage';
import { ModalInner, ModalInnerProps } from './components/ModalInner';
import { ModalInnerWrapper } from './components/ModalInnerWrapper';
import { ModalOuterWrapper } from './components/ModalOuterWrapper';
import { ModalSubtitle } from './components/ModalSubtitle';
import { ModalTitle } from './components/ModalTitle';
import { ModalTrigger } from './components/ModalTrigger';
import { ModalProvider } from './ModalContext';

export interface ModalProps extends ModalInnerProps {
  closable?: boolean;
  onClose?(): void;
  onOpen?(): void;
  size?: string;
  trigger?: ReactNode;
  style?(parentStyle: ReactModal.Styles): ReactModal.Styles;
  components?: ModalComponents;
  defaultVisible?: boolean;
  visible?: boolean;
  ref?: RefObject<ModalContext>;
}

interface ExtendedForwardRefExoticComponent<P>
  extends ForwardRefExoticComponent<P> {
  defaultStyles: ReactModal.Styles;
  components: ModalComponents;
}

type ExtendedReactModal = ReactModal & {
  portal: {
    shouldClose: boolean;
    handleOverlayOnClick(event: MouseEvent): void;
  };
};

type ExtendedMouseEvent = MouseEvent & {
  target: {
    className?: string;
  };
};

ReactModal.defaultStyles = {
  overlay: {
    ...ReactModal.defaultStyles.overlay,
    backgroundColor: 'rgba(0,0,0,.3)',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 2030,
  },
  content: {
    ...ReactModal.defaultStyles.content,
    background: 'none',
    border: 'none',
    padding: '20px 15px',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
};

if (typeof window !== 'undefined') {
  ReactModal.setAppElement('body');
}

const dummyRef: LegacyRef<ExtendedReactModal> = {
  current: null,
};

export const Modal = forwardRef(
  (
    {
      closable,
      onClose,
      onOpen,
      size = 'medium',
      trigger,
      style: propStyle,
      components,
      defaultVisible = false,
      visible: propVisible,
      title,
      subtitle,
      image,
      content,
      footer,
      children,
      ...props
    },
    ref,
  ) => {
    const [visible, setVisible] = useState(defaultVisible);
    const modalRef = useRef() as RefObject<ExtendedReactModal>;
    const style = useMemo(() => {
      if (propStyle && typeof propStyle === 'function') {
        return propStyle(Modal.defaultStyles);
      }
      return undefined;
    }, [propStyle]);

    const modalComponents = {} as ModalComponents;
    Object.keys(Modal.components).forEach((key) => {
      modalComponents[key] = components?.[key] || Modal.components[key];
    });

    const isVisible = Boolean(propVisible || visible);

    const close = () => {
      setVisible(() => {
        if (onClose) onClose();
        return false;
      });
    };

    const open = () => {
      setVisible(() => {
        if (onOpen) onOpen();
        return true;
      });
    };

    const toggle = () => {
      if (isVisible) {
        if (closable) close();
      } else {
        open();
      }
    };

    const context: ModalContext = {
      toggle,
      open,
      close,
    };

    useImperativeHandle(ref, () => context);

    const contentRef = (instance: HTMLDivElement) => {
      if (typeof window !== 'undefined' && instance) {
        // eslint-disable-next-line no-param-reassign
        instance.onclick = (event: ExtendedMouseEvent) => {
          if (!event || !event.target || !event.target.className) return;
          const str = event.target.className;
          if (typeof str !== 'string') return;
          if (str.includes('ReactModal__Content')) {
            if (modalRef.current && modalRef.current.portal) {
              modalRef.current.portal.shouldClose = true;
              modalRef.current.portal.handleOverlayOnClick(event);
            }
          }
        };
      }
    };

    return (
      <ModalProvider value={{ modal: context, Modal: modalComponents }}>
        <ModalGlobalStyles>
          <ReactModal
            // @ts-ignore
            ref={closable ? modalRef : dummyRef}
            contentRef={closable ? contentRef : undefined}
            closeTimeoutMS={200}
            isOpen={isVisible}
            onRequestClose={closable ? close : undefined}
            bodyOpenClassName="bodyModal"
            style={style}
            {...props}
          >
            <ModalOuterWrapper aria-hidden size={size}>
              {closable && <modalComponents.CloseIcon onClick={close} />}
              <modalComponents.InnerWrapper>
                <modalComponents.Inner
                  title={title}
                  subtitle={subtitle}
                  image={image}
                  content={content}
                  footer={footer}
                >
                  {children}
                </modalComponents.Inner>
              </modalComponents.InnerWrapper>
            </ModalOuterWrapper>
          </ReactModal>
          {trigger && (
            <modalComponents.Trigger type="open">
              {trigger}
            </modalComponents.Trigger>
          )}
        </ModalGlobalStyles>
      </ModalProvider>
    );
  },
) as ExtendedForwardRefExoticComponent<PropsWithChildren<ModalProps>>;

export const components: ModalComponents = {
  Title: ModalTitle,
  Subtitle: ModalSubtitle,
  Image: ModalImage,
  Content: ModalContent,
  Description: ModalDescription,
  Help: ModalHelp,
  Footer: ModalFooter,
  Trigger: ModalTrigger,
  InnerWrapper: ModalInnerWrapper,
  CloseIcon: ModalCloseIcon,
  Inner: ModalInner,
};

Modal.components = components;

Modal.defaultStyles = ReactModal.defaultStyles;
