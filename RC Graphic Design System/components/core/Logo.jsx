import React from 'react';
export function Logo({variant='lockup',height=48,src='../../assets/logo-rc-lockup-dark.png',style}){
  if(variant==='lockup')return <img src={src} alt="RC Graphic Designs & Printing" style={{height,width:'auto',borderRadius:'var(--radius-xs)',...style}}/>;
  return (
    <span style={{display:'inline-flex',flexDirection:'column',lineHeight:1,...style}}>
      <span style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:height*0.62,color:variant==='onDark'?'var(--silver)':'var(--ink-800)',letterSpacing:'-0.01em'}}>RC</span>
      <span style={{fontFamily:'var(--font-condensed)',fontWeight:700,fontSize:height*0.19,letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:variant==='onDark'?'var(--ink-300)':'var(--ink-600)',marginTop:height*0.08}}>Graphic Designs &amp; Printing</span>
    </span>
  );
}
