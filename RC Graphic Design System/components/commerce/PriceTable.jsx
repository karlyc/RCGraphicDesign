import React from 'react';
export function PriceTable({rows=[],selected,onSelect,style}){
  return <div style={{border:'1px solid var(--border-subtle)',borderRadius:'var(--radius-sm)',overflow:'hidden',background:'var(--white)',...style}}>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',padding:'var(--space-2) var(--space-4)',
      background:'var(--ink-800)',color:'var(--ink-300)',font:'var(--weight-bold) var(--text-3xs)/1.6 var(--font-condensed)',
      letterSpacing:'var(--tracking-caps)',textTransform:'uppercase'}}>
      <span>Quantity</span><span style={{textAlign:'right'}}>Each</span><span style={{textAlign:'right'}}>Total</span></div>
    {rows.map(r=>{const on=r.qty===selected;
      return <div key={r.qty} onClick={()=>onSelect&&onSelect(r.qty)}
        style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',alignItems:'center',
          padding:'var(--space-3) var(--space-4)',borderTop:'1px solid var(--border-subtle)',
          background:on?'var(--surface-tint)':'transparent',cursor:onSelect?'pointer':'default',
          transition:'background-color var(--dur-fast) var(--ease-out)'}}>
        <span style={{font:'var(--weight-semibold) var(--text-sm)/1 var(--font-sans)',color:'var(--text-strong)'}}>
          {r.qty.toLocaleString()}{r.note&&<span style={{marginLeft:8,font:'var(--weight-bold) var(--text-3xs)/1 var(--font-condensed)',
            letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--pine-600)'}}>{r.note}</span>}</span>
        <span style={{textAlign:'right',font:'var(--type-body-sm)',color:'var(--text-muted)'}}>{r.each}</span>
        <span style={{textAlign:'right',font:'var(--weight-bold) var(--text-sm)/1 var(--font-sans)',color:'var(--text-strong)'}}>{r.total}</span>
      </div>;})}
  </div>;
}
