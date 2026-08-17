import * as React from 'react';
export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Lucide icon slug, kebab-case, e.g. "shopping-cart", "truck", "credit-card". */
  name: string;
  /** Square size in px. 16 inline, 20 default, 24 in headers. */
  size?: number;
  /** Any CSS color; defaults to currentColor. */
  color?: string;
}
/** Monochrome Lucide glyph, masked so it inherits text color. */
export declare function Icon(props: IconProps): React.JSX.Element;
