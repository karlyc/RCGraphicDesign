import * as React from 'react';
export interface TurnaroundOptionProps {
  /** e.g. "Next day", "3 business days". */
  name: string;
  /** Delivery promise line, e.g. "Ships Thu, Aug 14". */
  shipsBy?: string;
  /** Formatted add-on price or "Included". */
  price?: string;
  selected?: boolean;
  /** Adds the charcoal "Most ordered" flag. */
  recommended?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
/** Turnaround/shipping choice card. Lay 3-4 side by side. */
export declare function TurnaroundOption(props: TurnaroundOptionProps): React.JSX.Element;
