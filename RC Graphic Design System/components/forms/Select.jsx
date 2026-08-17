import React from 'react';
import {Icon} from '../core/Icon.jsx';
export function Select({options=[],size='md',invalid,style,...rest}){
  const [focus,setFocus]=React.useState(false);
  const h=size==='sm'?'var(--control-h-sm)':size==='lg'?'var(--control-h-lg)':'var(--control-h-md)';
  return <span style={{position:'relative',display:'inline-flex',alignItems:'center',width:'100%',...style}}>
    <select {...rest} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}
      style={{appearance:'none',width:'100%',height:h,padding:'0 var(--space-8) 0 var(--space-3)',
        background:'var(--white)',border:`1px solid ${invalid?'var(--status-error-fg)':focus?'var(--border-focus)':'var(--border-default)'}`,
        borderRadius:'var(--radius-sm)',boxShadow:focus?'var(--ring-focus)':'none',outline:'none',
        font:'var(--type-body)',fontSize:'var(--text-sm)',color:'var(--text-strong)',cursor:'pointer'}}>
      {options.map(o=>{const v=typeof o==='string'?o:o.value,l=typeof o==='string'?o:o.label;
        return <option key={v} value={v}>{l}</option>;})}
    </select>
    <Icon name="chevron-down" size={16} color="var(--ink-500)" style={{position:'absolute',right:'var(--space-3)',pointerEvents:'none'}}/>
  </span>;
}
