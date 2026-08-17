import * as React from 'react';
/**
 * @startingPoint section="Core" subtitle="Buttons in every RC variant and size" viewport="700x200"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = magenta CTA. secondary = ink. outline/ghost = quiet. onDark = white on charcoal. */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'onDark';
  size?: 'sm' | 'md' | 'lg';
  /** Lucide slug rendered before the label. */
  icon?: string;
  /** Lucide slug rendered after the label. */
  iconAfter?: string;
  fullWidth?: boolean;
  /** Renders an <a> when set. */
  href?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}
/** RC's action control: condensed uppercase label, 4px radius, magenta primary. */
export declare function Button(props: ButtonProps): React.JSX.Element;
