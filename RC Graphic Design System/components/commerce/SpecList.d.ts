import * as React from 'react';
export interface SpecItem { label: string; value: React.ReactNode }
export interface SpecListProps {
  items?: SpecItem[];
  style?: React.CSSProperties;
}
/** Two-column label/value list for print specs and order summaries. */
export declare function SpecList(props: SpecListProps): React.JSX.Element;
