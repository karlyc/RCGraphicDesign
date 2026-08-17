import React from 'react';
import {Icon} from '../core/Icon.jsx';
export function Input({icon,suffix,invalid,size='md',style,...rest}){
  const [focus,setFocus]=React.useState(false);
  const h=size==='sm'?'var(--control-h-sm)':size==='lg'?'var(--control-h-lg)':'var(--control-h-md)';
  return <span style={{display:'flex',alignItems:'center',gap:'var(--space-2)',height:h,
    padding:'0 var(--space-3)',background:'var(--white)',
    border:`1px solid ${invalid?'var(--status-error-fg)':focus?'var(--border-focus)':'var(--border-default)'}`,
    borderRadius:'var(--radius-sm)',boxShadow:focus?'var(--ring-focus)':'none',
    transition:'var(--transition-control)',...style}}>
    {icon&&<Icon name={icon} size={16} color="var(--ink-400)"/>}
    <input {...rest} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}
      style={{flex:1,minWidth:0,border:0,outline:'none',background:'none',font:'var(--type-body)',
        fontSize:'var(--text-sm)',color:'var(--text-strong)'}}/>
    {suffix&&<span style={{font:'var(--type-label)',color:'var(--text-muted)'}}>{suffix}</span>}
  </span>;
}
