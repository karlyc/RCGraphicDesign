import React from 'react';
import {Icon} from '../core/Icon.jsx';
export function Checkbox({label,description,checked,onChange,disabled,style}){
  return <label style={{display:'flex',gap:'var(--space-3)',alignItems:'flex-start',cursor:disabled?'not-allowed':'pointer',opacity:disabled?0.55:1,...style}}>
    <span style={{flex:'none',width:18,height:18,marginTop:1,display:'flex',alignItems:'center',justifyContent:'center',
      background:checked?'var(--action-primary)':'var(--white)',
      border:`1px solid ${checked?'var(--action-primary)':'var(--border-default)'}`,
      borderRadius:'var(--radius-xs)',transition:'var(--transition-control)'}}>
      {checked&&<Icon name="check" size={13} color="var(--white)"/>}</span>
    <input type="checkbox" checked={!!checked} onChange={onChange} disabled={disabled}
      style={{position:'absolute',opacity:0,width:0,height:0}}/>
    <span>
      <span style={{display:'block',font:'var(--type-body-sm)',color:'var(--text-strong)'}}>{label}</span>
      {description&&<span style={{display:'block',font:'var(--type-body-sm)',fontSize:'var(--text-xs)',color:'var(--text-muted)'}}>{description}</span>}
    </span>
  </label>;
}
