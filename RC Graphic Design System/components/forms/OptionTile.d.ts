import * as React from 'react';
/**
 * @startingPoint section="Forms" subtitle="Spec option tiles and form controls" viewport="700x300"
 */
export interface OptionTileProps {
  title: string;
  /** Secondary spec line, e.g. "3.5 x 2 in". */
  meta?: string;
  /** Right-aligned price delta, e.g. "+$18". */
  priceNote?: string;
  /** Lucide slug. */
  icon?: string;
  /** CSS color for a stock/ink swatch square; replaces the icon. */
  swatch?: string;
  selected?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}
/** Selectable spec tile — the primary control of the RC product configurator. */
export declare function OptionTile(props: OptionTileProps): React.JSX.Element;
