import * as React from 'react';
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'default' | 'sunken' | 'tint' | 'dark';
  /** CSS padding value. */
  pad?: string;
  /** Stacked-paper offset shadow — RC's press-sheet motif. */
  sheet?: boolean;
  /** Lifts on hover. */
  interactive?: boolean;
  children?: React.ReactNode;
}
/** Generic surface: 4px radius, hairline border, 1px-hairline shadow. */
export declare function Card(props: CardProps): React.JSX.Element;
