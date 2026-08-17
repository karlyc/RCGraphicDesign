import * as React from 'react';
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Renders an x affordance and fires on click. */
  onRemove?: () => void;
  selected?: boolean;
  children?: React.ReactNode;
}
/** Pill used for catalog filters and applied-filter lists. */
export declare function Tag(props: TagProps): React.JSX.Element;
