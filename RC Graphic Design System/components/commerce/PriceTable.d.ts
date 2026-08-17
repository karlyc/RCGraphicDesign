import * as React from 'react';
export interface PriceRow {
  qty: number;
  /** Formatted unit price, e.g. "$0.09". */
  each: string;
  /** Formatted line total, e.g. "$45.00". */
  total: string;
  /** Optional flag, e.g. "Best value". */
  note?: string;
}
export interface PriceTableProps {
  rows?: PriceRow[];
  /** Highlighted qty. */
  selected?: number;
  onSelect?: (qty: number) => void;
  style?: React.CSSProperties;
}
/** Quantity-break price ladder with a charcoal header. */
export declare function PriceTable(props: PriceTableProps): React.JSX.Element;
