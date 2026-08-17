import React from 'react';
import {Icon} from '../core/Icon.jsx';
export function Toast({tone='success',title,message,onDismiss,style}){
  const fg=tone==='error'?'var(--status-error-fg)':tone==='warning'?'var(--status-warning-fg)':'var(--green-600)';
  const glyph=tone==='error'?'circle-x':tone==='warning'?'triangle-alert':'circle-check';
  return <div role="status" style={{display:'flex',gap:'var(--space-3)',alignItems:'flex-start',minWidth:300,maxWidth:420,
    padding:'var(--space-4)',background:'var(--ink-900)',color:'var(--white)',borderRadius:'var(--radius-sm)',
    boxShadow:'var(--shadow-xl)',...style}}>
    <Icon name={glyph} size={18} color={fg} style={{marginTop:1}}/>
    <div style={{flex:1,minWidth:0}}>
      {title&&<div style={{font:'var(--weight-semibold) var(--text-sm)/1.3 var(--font-sans)'}}>{title}</div>}
      {message&&<div style={{font:'var(--type-body-sm)',fontSize:'var(--text-xs)',color:'var(--ink-300)',marginTop:2}}>{message}</div>}
    </div>
    {onDismiss&&<button type="button" aria-label="Dismiss" onClick={onDismiss}
      style={{border:0,background:'none',padding:0,cursor:'pointer',color:'var(--ink-400)',display:'flex'}}><Icon name="x" size={14}/></button>}
  </div>;
}
