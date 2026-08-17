import * as React from 'react';
export interface ToastProps {
  tone?: 'success' | 'error' | 'warning';
  title?: string;
  message?: string;
  onDismiss?: () => void;
  style?: React.CSSProperties;
}
/** Transient charcoal confirmation, bottom-right, ~4s. */
export declare function Toast(props: ToastProps): React.JSX.Element;
