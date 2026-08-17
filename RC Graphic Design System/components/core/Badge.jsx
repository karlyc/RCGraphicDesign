import React from 'react';
import {Icon} from './Icon.jsx';
const TONES={neutral:['var(--ink-100)','var(--ink-700)'],rush:['var(--status-rush-bg)','var(--status-rush-fg)'],
 success:['var(--status-success-bg)','var(--status-success-fg)'],warning:['var(--status-warning-bg)','var(--status-warning-fg)'],
 error:['var(--status-error-bg)','var(--status-error-fg)'],info:['var(--status-info-bg)','var(--status-info-fg)'],
 dark:['var(--ink-800)','var(--white)']};
export function Badge({children,tone='neutral',icon,solid,style,...rest}){
  const [bg,fg]=TONES[tone]||TONES.neutral;
  return <span {...rest} style={{display:'inline-flex',alignItems:'center',gap:'var(--space-1)',
    padding:'3px var(--space-2)',background:solid?fg:bg,color:solid?'var(--white)':fg,
    borderRadius:'var(--radius-xs)',font:'var(--weight-bold) var(--text-3xs)/1.4 var(--font-condensed)',
    letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',...style}}>
    {icon&&<Icon name={icon} size={12}/>}{children}</span>;
}
