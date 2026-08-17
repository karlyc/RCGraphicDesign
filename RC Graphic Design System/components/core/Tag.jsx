import React from 'react';
import {Icon} from './Icon.jsx';
export function Tag({children,onRemove,selected,onClick,style,...rest}){
  return <span {...rest} onClick={onClick} style={{display:'inline-flex',alignItems:'center',gap:'var(--space-2)',
    height:28,padding:'0 var(--space-3)',background:selected?'var(--surface-selected)':'var(--white)',
    color:selected?'var(--pine-700)':'var(--ink-700)',
    border:`1px solid ${selected?'var(--border-selected)':'var(--border-subtle)'}`,
    borderRadius:'var(--radius-pill)',font:'var(--type-label)',cursor:onClick?'pointer':'default',
    transition:'var(--transition-control)',...style}}>
    {children}
    {onRemove&&<button type="button" aria-label="Remove" onClick={e=>{e.stopPropagation();onRemove();}}
      style={{display:'flex',border:0,background:'none',padding:0,cursor:'pointer',color:'inherit'}}><Icon name="x" size={12}/></button>}
  </span>;
}
