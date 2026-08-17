import React from 'react';
export function Tabs({items=[],value,onChange,style}){
  return <div role="tablist" style={{display:'flex',gap:'var(--space-6)',borderBottom:'1px solid var(--border-subtle)',...style}}>
    {items.map(it=>{const v=typeof it==='string'?it:it.value,l=typeof it==='string'?it:it.label,active=v===value;
      return <button key={v} role="tab" aria-selected={active} onClick={()=>onChange&&onChange(v)}
        style={{padding:'0 0 var(--space-3)',background:'none',border:0,borderBottom:`2px solid ${active?'var(--pine-500)':'transparent'}`,
          marginBottom:-1,cursor:'pointer',font:'var(--weight-bold) var(--text-sm)/1 var(--font-condensed)',
          letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',
          color:active?'var(--text-strong)':'var(--text-muted)',transition:'var(--transition-control)'}}>{l}</button>;})}
  </div>;
}
