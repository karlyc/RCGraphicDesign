import * as React from 'react';
export interface ReviewStarsProps {
  /** 0-5, halves round down. */
  value?: number;
  /** Review count; omit to show stars only. */
  count?: number;
  /** Star size in px. */
  size?: number;
  style?: React.CSSProperties;
}
/** Rating readout in brand yellow. */
export declare function ReviewStars(props: ReviewStarsProps): React.JSX.Element;
