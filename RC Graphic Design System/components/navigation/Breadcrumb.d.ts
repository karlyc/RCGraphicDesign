import * as React from 'react';
export interface CrumbItem { label: string; href?: string }
export interface BreadcrumbProps {
  items?: Array<string | CrumbItem>;
  style?: React.CSSProperties;
}
/** Catalog trail above product pages. Last item is the current page and is not a link. */
export declare function Breadcrumb(props: BreadcrumbProps): React.JSX.Element;
