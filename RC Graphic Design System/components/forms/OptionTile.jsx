import React from 'react';
import {Icon} from '../core/Icon.jsx';
export function OptionTile({title,meta,priceNote,icon,swatch,selected,onClick,disabled,style}){
  const [hover,setHover]=React.useState(false);
  return <button type="button" onClick={onClick} disabled={disabled}
    onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
    style={{display:'flex',alignItems:'center',gap:'var(--space-3)',textAlign:'left',width:'100%',
      padding:'var(--space-3) var(--space-4)',background:selected?'var(--surface-tint)':'var(--white)',
      border:`1px solid ${selected?'var(--border-selected)':hover?'var(--border-default)':'var(--border-subtle)'}`,
      borderRadius:'var(--radius-sm)',boxShadow:selected?'var(--ring-selected)':'none',
      cursor:disabled?'not-allowed':'pointer',opacity:disabled?0.5:1,transition:'var(--transition-control)',...style}}>
    {swatch&&<span style={{flex:'none',width:26,height:26,borderRadius:'var(--radius-xs)',background:swatch,
      border:'1px solid rgba(19,19,22,.12)'}}/>}
    {icon&&!swatch&&<Icon name={icon} size={20} color={selected?'var(--pine-600)':'var(--ink-500)'}/>}
    <span style={{flex:1,minWidth:0}}>
      <span style={{display:'block',font:'var(--weight-semibold) var(--text-sm)/1.3 var(--font-sans)',color:'var(--text-strong)'}}>{title}</span>
      {meta&&<span style={{display:'block',font:'var(--type-body-sm)',fontSize:'var(--text-xs)',color:'var(--text-muted)'}}>{meta}</span>}
    </span>
    {priceNote&&<span style={{font:'var(--weight-semibold) var(--text-xs)/1 var(--font-sans)',color:selected?'var(--pine-600)':'var(--ink-600)'}}>{priceNote}</span>}
  </button>;
}
