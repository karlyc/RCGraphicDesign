import * as React from 'react';
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'neutral' | 'rush' | 'success' | 'warning' | 'error' | 'info' | 'dark';
  /** Lucide slug shown before the label. */
  icon?: string;
  /** Inverts to a filled chip. */
  solid?: boolean;
  children?: React.ReactNode;
}
/** Small condensed-caps status chip: turnaround promises, stock states, order status. */
export declare function Badge(props: BadgeProps): React.JSX.Element;
