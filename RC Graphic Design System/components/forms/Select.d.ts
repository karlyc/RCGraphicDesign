import * as React from 'react';
export interface SelectOption { value: string; label: string }
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Strings or {value,label} pairs. */
  options?: Array<string | SelectOption>;
  size?: 'sm' | 'md' | 'lg';
  invalid?: boolean;
}
/** Native select with RC chrome — for long spec lists (paper stock, coating, size). */
export declare function Select(props: SelectProps): React.JSX.Element;
