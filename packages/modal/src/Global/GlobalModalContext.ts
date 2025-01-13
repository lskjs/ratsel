import { Context, createContext } from 'react';

import { MethodsList } from './GlobalModalProvider';

export const GlobalModalContext = createContext({}) as unknown as Context<MethodsList>;
export const { Consumer, Provider } = GlobalModalContext;
