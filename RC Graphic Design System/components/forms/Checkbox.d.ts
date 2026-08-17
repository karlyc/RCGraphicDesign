import * as React from 'react';
export interface CheckboxProps {
  label?: React.ReactNode;
  /** Second line of quieter copy. */
  description?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}
/** Square checkbox, magenta when checked. */
export declare function Checkbox(props: CheckboxProps): React.JSX.Element;
