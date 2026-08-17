import * as React from 'react';
export interface DialogProps {
  open?: boolean;
  title?: string;
  /** Condensed magenta kicker above the title. */
  eyebrow?: string;
  /** Right-aligned action row on a sunken bar. */
  footer?: React.ReactNode;
  onClose?: () => void;
  /** Panel width in px. */
  width?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
/** Modal for artwork upload, proof preview and quote requests. */
export declare function Dialog(props: DialogProps): React.JSX.Element;
