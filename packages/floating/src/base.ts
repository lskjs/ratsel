import type { ComponentPropsWithRef, ReactElement } from 'react';

export interface BaseProps {
  trigger: ReactElement;
  triggerProps?: ComponentPropsWithRef<any>;
}
