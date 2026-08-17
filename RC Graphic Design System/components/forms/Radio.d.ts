import * as React from 'react';
export interface RadioProps {
  label?: React.ReactNode;
  description?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}
/** Single-choice control for short mutually exclusive lists. */
export declare function Radio(props: RadioProps): React.JSX.Element;
