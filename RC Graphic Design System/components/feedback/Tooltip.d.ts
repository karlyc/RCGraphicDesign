import * as React from 'react';
export interface TooltipProps {
  /** Short plain-text hint. */
  label: string;
  placement?: 'top' | 'bottom';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
/** Hover hint for spec jargon (bleed, carbonless part, grommet). */
export declare function Tooltip(props: TooltipProps): React.JSX.Element;
