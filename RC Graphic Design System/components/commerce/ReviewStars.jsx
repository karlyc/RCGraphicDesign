import React from 'react';
import {Icon} from '../core/Icon.jsx';
export function ReviewStars({value=5,count,size=14,style}){
  return <span style={{display:'inline-flex',alignItems:'center',gap:'var(--space-2)',...style}}>
    <span style={{display:'inline-flex',gap:2}}>
      {[0,1,2,3,4].map(i=><Icon key={i} name={value>=i+1?'star':'star-off'} size={size}
        color={value>=i+1?'var(--yellow-500)':'var(--ink-300)'}/>)}
    </span>
    {count!=null&&<span style={{font:'var(--type-body-sm)',fontSize:'var(--text-xs)',color:'var(--text-muted)'}}>
      {value.toFixed(1)} ({count.toLocaleString()})</span>}
  </span>;
}
