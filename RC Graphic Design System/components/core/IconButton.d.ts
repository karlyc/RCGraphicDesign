import * as React from 'react';
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Lucide slug. */
  icon: string;
  /** Accessible label — required, the button has no text. */
  label: string;
  variant?: 'ghost' | 'outline' | 'solid' | 'primary';
  size?: 'sm' | 'md' | 'lg';
  /** Count bubble, e.g. cart item count. */
  badge?: number | string;
}
/** Square icon-only control for headers, toolbars and the cart. */
export declare function IconButton(props: IconButtonProps): React.JSX.Element;
