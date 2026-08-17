import * as React from 'react';
export interface CalloutProps {
  tone?: 'info' | 'success' | 'warning' | 'error' | 'rush';
  title?: string;
  /** Lucide slug overriding the tone's default glyph. */
  icon?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
/** Inline notice for file requirements, cutoff times and proof warnings. */
export declare function Callout(props: CalloutProps): React.JSX.Element;
