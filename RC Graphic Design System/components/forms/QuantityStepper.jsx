import React from 'react';
import {Icon} from '../core/Icon.jsx';
export function QuantityStepper({value=0,step=50,min=0,max=100000,onChange,style}){
  const btn=dir=>()=>onChange&&onChange(Math.min(max,Math.max(min,value+dir*step)));
  const b={width:34,height:'var(--control-h-md)',display:'flex',alignItems:'center',justifyContent:'center',
    background:'var(--ink-50)',border:0,cursor:'pointer',color:'var(--ink-700)'};
  return <span style={{display:'inline-flex',alignItems:'center',border:'1px solid var(--border-default)',
    borderRadius:'var(--radius-sm)',overflow:'hidden',background:'var(--white)',...style}}>
    <button type="button" aria-label="Decrease" onClick={btn(-1)} style={b}><Icon name="minus" size={14}/></button>
    <input value={value} onChange={e=>onChange&&onChange(Number(e.target.value.replace(/\D/g,''))||0)}
      style={{width:72,height:'var(--control-h-md)',border:0,borderLeft:'1px solid var(--border-subtle)',
        borderRight:'1px solid var(--border-subtle)',outline:'none',textAlign:'center',
        font:'var(--weight-semibold) var(--text-sm)/1 var(--font-sans)',color:'var(--text-strong)'}}/>
    <button type="button" aria-label="Increase" onClick={btn(1)} style={b}><Icon name="plus" size={14}/></button>
  </span>;
}
