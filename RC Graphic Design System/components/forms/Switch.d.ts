import * as React from 'react';
export interface SwitchProps {
  checked?: boolean;
  /** Receives the next boolean. */
  onChange?: (next: boolean) => void;
  label?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}
/** Instant-effect toggle (preview options, saved-address reuse). */
export declare function Switch(props: SwitchProps): React.JSX.Element;
