import React from 'react';
export function Tooltip({label,placement='top',children,style}){
  const [show,setShow]=React.useState(false);
  const pos=placement==='bottom'?{top:'calc(100% + 8px)'}:{bottom:'calc(100% + 8px)'};
  return <span style={{position:'relative',display:'inline-flex',...style}}
    onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
    {children}
    {show&&<span role="tooltip" style={{position:'absolute',left:'50%',transform:'translateX(-50%)',...pos,
      whiteSpace:'nowrap',padding:'6px var(--space-3)',background:'var(--ink-900)',color:'var(--white)',
      borderRadius:'var(--radius-xs)',font:'var(--type-label)',fontWeight:500,boxShadow:'var(--shadow-lg)',zIndex:40}}>{label}</span>}
  </span>;
}
