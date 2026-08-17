import React from 'react';
export function SpecList({items=[],style}){
  return <dl style={{margin:0,display:'grid',gridTemplateColumns:'auto 1fr',
    columnGap:'var(--space-6)',rowGap:'var(--space-2)',...style}}>
    {items.map(it=><React.Fragment key={it.label}>
      <dt style={{font:'var(--weight-bold) var(--text-2xs)/1.5 var(--font-condensed)',letterSpacing:'var(--tracking-caps)',
        textTransform:'uppercase',color:'var(--text-muted)'}}>{it.label}</dt>
      <dd style={{margin:0,font:'var(--type-body-sm)',color:'var(--text-strong)'}}>{it.value}</dd>
    </React.Fragment>)}
  </dl>;
}
