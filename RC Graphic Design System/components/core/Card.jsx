import React from 'react';
export function Card({children,tone='default',pad='var(--space-6)',sheet,interactive,style,...rest}){
  const [hover,setHover]=React.useState(false);
  const bg=tone==='dark'?'var(--surface-dark)':tone==='sunken'?'var(--surface-sunken)':tone==='tint'?'var(--surface-tint)':'var(--surface-card)';
  return <div {...rest} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
    style={{background:bg,color:tone==='dark'?'var(--text-inverse)':'var(--text-body)',
      border:tone==='dark'?'1px solid transparent':'1px solid var(--border-subtle)',
      borderRadius:'var(--radius-sm)',padding:pad,
      boxShadow:sheet?'var(--shadow-sheet)':(interactive&&hover?'var(--shadow-lg)':'var(--shadow-sm)'),
      transform:interactive&&hover?'translateY(-2px)':'none',
      transition:'box-shadow var(--dur-base) var(--ease-out),transform var(--dur-base) var(--ease-out)',...style}}>
    {children}</div>;
}
