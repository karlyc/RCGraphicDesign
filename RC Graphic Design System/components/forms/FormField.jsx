import React from 'react';
export function FormField({label,hint,error,required,htmlFor,children,style}){
  return <div style={{display:'flex',flexDirection:'column',gap:'var(--space-2)',...style}}>
    {label&&<label htmlFor={htmlFor} style={{font:'var(--weight-bold) var(--text-2xs)/1.2 var(--font-condensed)',
      letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--ink-600)'}}>
      {label}{required&&<span style={{color:'var(--pine-500)',marginLeft:3}}>*</span>}</label>}
    {children}
    {(error||hint)&&<span style={{font:'var(--type-body-sm)',fontSize:'var(--text-xs)',
      color:error?'var(--status-error-fg)':'var(--text-muted)'}}>{error||hint}</span>}
  </div>;
}
