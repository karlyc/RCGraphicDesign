import React from 'react';
import {Icon} from '../core/Icon.jsx';
export function Dialog({open=true,title,eyebrow,children,footer,onClose,width=520,style}){
  if(!open)return null;
  return <div style={{position:'fixed',inset:0,background:'var(--overlay-scrim)',backdropFilter:'var(--blur-panel)',
    display:'flex',alignItems:'center',justifyContent:'center',padding:'var(--space-6)',zIndex:60}} onClick={onClose}>
    <div role="dialog" aria-modal="true" onClick={e=>e.stopPropagation()}
      style={{width,maxWidth:'100%',background:'var(--surface-card)',borderRadius:'var(--radius-sm)',
        boxShadow:'var(--shadow-xl)',overflow:'hidden',...style}}>
      <div style={{display:'flex',alignItems:'flex-start',gap:'var(--space-4)',padding:'var(--space-6) var(--space-6) var(--space-4)'}}>
        <div style={{flex:1,minWidth:0}}>
          {eyebrow&&<div style={{font:'var(--type-eyebrow)',letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--pine-600)',marginBottom:6}}>{eyebrow}</div>}
          {title&&<h3 style={{font:'var(--type-h2)',fontSize:'var(--text-xl)'}}>{title}</h3>}
        </div>
        {onClose&&<button type="button" aria-label="Close" onClick={onClose}
          style={{border:0,background:'none',cursor:'pointer',color:'var(--ink-500)',display:'flex',padding:4}}><Icon name="x" size={18}/></button>}
      </div>
      <div style={{padding:'0 var(--space-6) var(--space-6)',font:'var(--type-body)',fontSize:'var(--text-sm)'}}>{children}</div>
      {footer&&<div style={{display:'flex',justifyContent:'flex-end',gap:'var(--space-3)',padding:'var(--space-4) var(--space-6)',
        background:'var(--ink-50)',borderTop:'1px solid var(--border-subtle)'}}>{footer}</div>}
    </div>
  </div>;
}
