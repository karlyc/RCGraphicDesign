import React from 'react';
import {Icon} from './Icon.jsx';
const SZ={sm:32,md:40,lg:48};
export function IconButton({icon,label,variant='ghost',size='md',badge,disabled,onClick,style,...rest}){
  const d=SZ[size]||40,[hover,setHover]=React.useState(false);
  const fill=variant==='solid'?'var(--action-secondary)':variant==='primary'?'var(--action-primary)':'transparent';
  const fg=variant==='ghost'?'var(--ink-700)':'var(--white)';
  return (
    <button type="button" aria-label={label} disabled={disabled} onClick={onClick}
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} {...rest}
      style={{position:'relative',width:d,height:d,display:'inline-flex',alignItems:'center',justifyContent:'center',
        background:hover&&variant==='ghost'?'var(--ink-100)':fill,color:disabled?'var(--action-disabled-text)':fg,
        border:variant==='outline'?'1px solid var(--border-default)':'1px solid transparent',
        borderRadius:'var(--radius-sm)',cursor:disabled?'not-allowed':'pointer',
        opacity:hover&&variant!=='ghost'?0.88:1,transition:'var(--transition-control)',...style}}>
      <Icon name={icon} size={size==='sm'?16:20}/>
      {badge!=null&&<span style={{position:'absolute',top:2,right:2,minWidth:16,height:16,padding:'0 4px',
        background:'var(--pine-500)',color:'var(--white)',borderRadius:'var(--radius-pill)',
        font:'var(--weight-bold) var(--text-3xs)/16px var(--font-sans)',textAlign:'center'}}>{badge}</span>}
    </button>
  );
}
