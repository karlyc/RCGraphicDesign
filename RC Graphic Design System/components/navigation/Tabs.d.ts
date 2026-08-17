import * as React from 'react';
export interface TabItem { value: string; label: string }
export interface TabsProps {
  items?: Array<string | TabItem>;
  value?: string;
  onChange?: (next: string) => void;
  style?: React.CSSProperties;
}
/** Underlined condensed-caps tabs for in-page sections (Details, Specs, Reviews). */
export declare function Tabs(props: TabsProps): React.JSX.Element;
