import * as React from 'react';
/**
 * @startingPoint section="Commerce" subtitle="Print product tiles with price and turnaround" viewport="700x340"
 */
export interface ProductCardProps {
  name: string;
  /** One-line spec summary. */
  blurb?: string;
  /** Formatted price, e.g. "$24.50". */
  startingAt?: string;
  /** Short turnaround promise, e.g. "Next day". */
  turnaround?: string;
  /** Product photo URL; omitted shows the labelled photo placeholder. */
  image?: string;
  /** Lucide slug used in the placeholder. */
  icon?: string;
  /** Corner flag text. */
  badge?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}
/** Catalog tile for a print product. */
export declare function ProductCard(props: ProductCardProps): React.JSX.Element;
