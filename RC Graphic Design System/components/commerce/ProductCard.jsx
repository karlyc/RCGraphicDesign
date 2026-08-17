import React from 'react';
import {Icon} from '../core/Icon.jsx';
import {Badge} from '../core/Badge.jsx';
export function ProductCard({name,blurb,startingAt,turnaround,image,icon='printer',badge,onClick,style}){
  const [hover,setHover]=React.useState(false);
  return <a href="#" onClick={e=>{e.preventDefault();onClick&&onClick();}}
    onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
    style={{display:'flex',flexDirection:'column',textDecoration:'none',background:'var(--surface-card)',
      border:'1px solid var(--border-subtle)',borderRadius:'var(--radius-sm)',overflow:'hidden',
      boxShadow:hover?'var(--shadow-lg)':'var(--shadow-sm)',transform:hover?'translateY(-2px)':'none',
      transition:'box-shadow var(--dur-base) var(--ease-out),transform var(--dur-base) var(--ease-out)',...style}}>
    <div style={{position:'relative',aspectRatio:'4 / 3',background:'var(--ink-100)',
      display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden',borderBottom:'1px solid var(--border-subtle)'}}>
      {image?<img src={image} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
      :<span style={{display:'flex',flexDirection:'column',alignItems:'center',gap:6,color:'var(--ink-400)'}}>
        <Icon name={icon} size={30}/>
        <span style={{font:'var(--weight-bold) var(--text-3xs)/1 var(--font-condensed)',letterSpacing:'var(--tracking-caps-loose)',textTransform:'uppercase'}}>Product photo</span></span>}
      {badge&&<span style={{position:'absolute',top:'var(--space-3)',left:'var(--space-3)'}}><Badge tone="rush" solid>{badge}</Badge></span>}
    </div>
    <div style={{display:'flex',flexDirection:'column',gap:'var(--space-2)',padding:'var(--space-4)',flex:1}}>
      <span style={{font:'var(--weight-semibold) var(--text-md)/1.25 var(--font-sans)',color:'var(--text-strong)'}}>{name}</span>
      {blurb&&<span style={{font:'var(--type-body-sm)',fontSize:'var(--text-xs)',color:'var(--text-muted)',flex:1}}>{blurb}</span>}
      <span style={{display:'flex',alignItems:'baseline',justifyContent:'space-between',gap:'var(--space-3)',
        marginTop:'var(--space-2)',paddingTop:'var(--space-3)',borderTop:'1px solid var(--border-subtle)'}}>
        {startingAt&&<span style={{font:'var(--type-body-sm)',fontSize:'var(--text-xs)',color:'var(--text-muted)'}}>
          From <b style={{font:'var(--weight-bold) var(--text-md)/1 var(--font-sans)',color:'var(--text-strong)'}}>{startingAt}</b></span>}
        {turnaround&&<span style={{display:'inline-flex',alignItems:'center',gap:4,font:'var(--weight-bold) var(--text-3xs)/1 var(--font-condensed)',
          letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--pine-600)'}}>
          <Icon name="clock" size={12}/>{turnaround}</span>}
      </span>
    </div>
  </a>;
}
