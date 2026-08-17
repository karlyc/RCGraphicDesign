import React from 'react';
import {Icon} from '../core/Icon.jsx';
export function Breadcrumb({items=[],style}){
  return <nav style={{display:'flex',alignItems:'center',gap:'var(--space-2)',flexWrap:'wrap',...style}}>
    {items.map((it,i)=>{const last=i===items.length-1,label=typeof it==='string'?it:it.label;
      return <React.Fragment key={label}>
        {i>0&&<Icon name="chevron-right" size={13} color="var(--ink-400)"/>}
        {last?<span style={{font:'var(--type-body-sm)',fontSize:'var(--text-xs)',color:'var(--text-muted)'}}>{label}</span>
        :<a href={(typeof it==='object'&&it.href)||'#'} style={{font:'var(--type-body-sm)',fontSize:'var(--text-xs)',color:'var(--ink-600)'}}>{label}</a>}
      </React.Fragment>;})}
  </nav>;
}
