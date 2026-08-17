import React from 'react';
export function Textarea({invalid,rows=4,style,...rest}){
  const [focus,setFocus]=React.useState(false);
  return <textarea rows={rows} {...rest} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}
    style={{width:'100%',padding:'var(--space-3)',background:'var(--white)',resize:'vertical',
      border:`1px solid ${invalid?'var(--status-error-fg)':focus?'var(--border-focus)':'var(--border-default)'}`,
      borderRadius:'var(--radius-sm)',boxShadow:focus?'var(--ring-focus)':'none',outline:'none',
      font:'var(--type-body)',fontSize:'var(--text-sm)',color:'var(--text-strong)',
      transition:'var(--transition-control)',...style}}/>;
}
