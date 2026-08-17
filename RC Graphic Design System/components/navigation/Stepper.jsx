import React from 'react';
import {Icon} from '../core/Icon.jsx';
export function Stepper({steps=[],current=0,style}){
  return <ol style={{display:'flex',alignItems:'center',gap:'var(--space-3)',listStyle:'none',margin:0,padding:0,...style}}>
    {steps.map((s,i)=>{const done=i<current,active=i===current;
      return <li key={s} style={{display:'flex',alignItems:'center',gap:'var(--space-3)'}}>
        <span style={{display:'flex',alignItems:'center',gap:'var(--space-2)'}}>
          <span style={{width:22,height:22,flex:'none',display:'flex',alignItems:'center',justifyContent:'center',
            borderRadius:'var(--radius-pill)',background:done?'var(--pine-500)':active?'var(--ink-800)':'var(--ink-200)',
            color:done||active?'var(--white)':'var(--ink-500)',font:'var(--weight-bold) var(--text-3xs)/1 var(--font-sans)'}}>
            {done?<Icon name="check" size={12}/>:i+1}</span>
          <span style={{font:'var(--weight-bold) var(--text-2xs)/1 var(--font-condensed)',letterSpacing:'var(--tracking-caps)',
            textTransform:'uppercase',color:active?'var(--text-strong)':'var(--text-muted)'}}>{s}</span>
        </span>
        {i<steps.length-1&&<span style={{width:28,height:1,background:'var(--border-default)'}}/>}
      </li>;})}
  </ol>;
}
