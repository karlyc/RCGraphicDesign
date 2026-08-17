import React from 'react';
export function Switch({checked,onChange,label,disabled,style}){
  return <label style={{display:'inline-flex',alignItems:'center',gap:'var(--space-3)',cursor:disabled?'not-allowed':'pointer',opacity:disabled?0.55:1,...style}}>
    <span onClick={()=>!disabled&&onChange&&onChange(!checked)}
      style={{width:38,height:22,padding:2,borderRadius:'var(--radius-pill)',
        background:checked?'var(--action-primary)':'var(--ink-300)',
        transition:'background-color var(--dur-fast) var(--ease-out)'}}>
      <span style={{display:'block',width:18,height:18,borderRadius:'var(--radius-pill)',background:'var(--white)',
        boxShadow:'var(--shadow-sm)',transform:checked?'translateX(16px)':'none',
        transition:'transform var(--dur-fast) var(--ease-out)'}}/></span>
    {label&&<span style={{font:'var(--type-body-sm)',color:'var(--text-strong)'}}>{label}</span>}
  </label>;
}
