import * as React from 'react';
export interface FormFieldProps {
  /** Condensed uppercase label. */
  label?: string;
  /** Helper copy under the control. */
  hint?: string;
  /** Replaces hint and turns red. */
  error?: string;
  required?: boolean;
  htmlFor?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
/** Label + control + hint/error wrapper. Every form control in RC ships inside one. */
export declare function FormField(props: FormFieldProps): React.JSX.Element;
