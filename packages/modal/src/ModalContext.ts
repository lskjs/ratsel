// eslint-disable-next-line import/no-unresolved
import createContextToProps from '@lskjs/utils/createContextToProps';
import { createContext } from 'react';

export const ModalContext = createContext({});
export const ModalProvider = ModalContext.Provider;
export const ModalConsumer = ModalContext.Consumer;
export const contextToProps = createContextToProps(ModalContext);
