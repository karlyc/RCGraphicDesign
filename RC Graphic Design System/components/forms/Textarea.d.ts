import * as React from 'react';
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
  rows?: number;
}
/** Multi-line input for job notes and quote requests. */
export declare function Textarea(props: TextareaProps): React.JSX.Element;
