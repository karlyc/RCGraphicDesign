import * as React from 'react';
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Lucide slug shown inside, left. */
  icon?: string;
  /** Static text inside, right — units like "in" or "pcs". */
  suffix?: string;
  invalid?: boolean;
  size?: 'sm' | 'md' | 'lg';
}
/** Single-line text input with optional leading icon and unit suffix. */
export declare function Input(props: InputProps): React.JSX.Element;
