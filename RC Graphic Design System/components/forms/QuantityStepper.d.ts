import * as React from 'react';
export interface QuantityStepperProps {
  value?: number;
  /** Increment — print quantities move in 50s/100s, not 1s. */
  step?: number;
  min?: number;
  max?: number;
  onChange?: (next: number) => void;
  style?: React.CSSProperties;
}
/** Numeric stepper for print run quantities. */
export declare function QuantityStepper(props: QuantityStepperProps): React.JSX.Element;
