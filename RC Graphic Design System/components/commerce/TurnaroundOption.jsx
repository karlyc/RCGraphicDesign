import React from 'react';
import {Icon} from '../core/Icon.jsx';
export function TurnaroundOption({name,shipsBy,price,selected,recommended,onClick,style}){
  return <button type="button" onClick={onClick}
    style={{display:'flex',flexDirection:'column',alignItems:'flex-start',gap:4,textAlign:'left',
      padding:'var(--space-4)',background:selected?'var(--surface-tint)':'var(--white)',
      border:`1px solid ${selected?'var(--border-selected)':'var(--border-subtle)'}`,
      borderRadius:'var(--radius-sm)',boxShadow:selected?'var(--ring-selected)':'none',
      cursor:'pointer',transition:'var(--transition-control)',position:'relative',...style}}>
    {recommended&&<span style={{position:'absolute',top:-9,left:'var(--space-4)',padding:'2px 6px',
      background:'var(--ink-800)',color:'var(--white)',borderRadius:'var(--radius-xs)',
      font:'var(--weight-bold) var(--text-3xs)/1.4 var(--font-condensed)',letterSpacing:'var(--tracking-caps)',
      textTransform:'uppercase'}}>Most ordered</span>}
    <span style={{display:'flex',alignItems:'center',gap:6}}>
      <Icon name="truck" size={16} color={selected?'var(--pine-600)':'var(--ink-500)'}/>
      <span style={{font:'var(--weight-bold) var(--text-sm)/1 var(--font-condensed)',letterSpacing:'var(--tracking-caps)',
        textTransform:'uppercase',color:'var(--text-strong)'}}>{name}</span></span>
    {shipsBy&&<span style={{font:'var(--type-body-sm)',fontSize:'var(--text-xs)',color:'var(--text-muted)'}}>{shipsBy}</span>}
    {price&&<span style={{font:'var(--weight-bold) var(--text-md)/1 var(--font-sans)',color:'var(--text-strong)',marginTop:2}}>{price}</span>}
  </button>;
}
