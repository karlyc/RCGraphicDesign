import * as React from 'react';
export interface LogoProps {
  /** "lockup" = the real logo image (default). "onDark"/"onLight" = typographic fallback. */
  variant?: 'lockup' | 'onDark' | 'onLight';
  /** Rendered height in px; the type fallback scales from it. */
  height?: number;
  /** Path to the logo asset, relative to the consuming page. */
  src?: string;
  style?: React.CSSProperties;
}
/** The RC brand mark: raster lockup, or a typographic stand-in when the artwork is unavailable. */
export declare function Logo(props: LogoProps): React.JSX.Element;
