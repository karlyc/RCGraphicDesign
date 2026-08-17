import * as React from 'react';
export interface StepperProps {
  /** Step labels in order. */
  steps?: string[];
  /** Zero-based index of the active step; earlier steps render as complete. */
  current?: number;
  style?: React.CSSProperties;
}
/** Horizontal progress trail for checkout and upload-to-proof flows. */
export declare function Stepper(props: StepperProps): React.JSX.Element;
