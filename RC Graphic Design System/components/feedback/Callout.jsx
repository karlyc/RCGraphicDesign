import React from 'react';
import {Icon} from '../core/Icon.jsx';
const T={info:['var(--status-info-bg)','var(--status-info-fg)','info'],
 success:['var(--status-success-bg)','var(--status-success-fg)','badge-check'],
 warning:['var(--status-warning-bg)','var(--status-warning-fg)','triangle-alert'],
 error:['var(--status-error-bg)','var(--status-error-fg)','circle-x'],
 rush:['var(--status-rush-bg)','var(--status-rush-fg)','zap']};
export function Callout({tone='info',title,children,icon,style}){
  const [bg,fg,def]=T[tone]||T.info;
  return <div style={{display:'flex',gap:'var(--space-3)',padding:'var(--space-4)',background:bg,
    borderRadius:'var(--radius-sm)',border:'1px solid rgba(19,19,22,.06)',...style}}>
    <Icon name={icon||def} size={18} color={fg} style={{marginTop:1}}/>
    <div style={{minWidth:0}}>
      {title&&<div style={{font:'var(--weight-semibold) var(--text-sm)/1.3 var(--font-sans)',color:'var(--text-strong)',marginBottom:children?4:0}}>{title}</div>}
      {children&&<div style={{font:'var(--type-body-sm)',color:'var(--ink-700)'}}>{children}</div>}
    </div>
  </div>;
}
