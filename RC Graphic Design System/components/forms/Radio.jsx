import React from 'react';
export function Radio({label,description,checked,onChange,name,disabled,style}){
  return <label style={{display:'flex',gap:'var(--space-3)',alignItems:'flex-start',cursor:disabled?'not-allowed':'pointer',opacity:disabled?0.55:1,...style}}>
    <span style={{flex:'none',width:18,height:18,marginTop:1,display:'flex',alignItems:'center',justifyContent:'center',
      background:'var(--white)',border:`1px solid ${checked?'var(--action-primary)':'var(--border-default)'}`,
      borderRadius:'var(--radius-pill)',transition:'var(--transition-control)'}}>
      {checked&&<span style={{width:9,height:9,borderRadius:'var(--radius-pill)',background:'var(--action-primary)'}}/>}</span>
    <input type="radio" name={name} checked={!!checked} onChange={onChange} disabled={disabled}
      style={{position:'absolute',opacity:0,width:0,height:0}}/>
    <span>
      <span style={{display:'block',font:'var(--type-body-sm)',color:'var(--text-strong)'}}>{label}</span>
      {description&&<span style={{display:'block',font:'var(--type-body-sm)',fontSize:'var(--text-xs)',color:'var(--text-muted)'}}>{description}</span>}
    </span>
  </label>;
}
