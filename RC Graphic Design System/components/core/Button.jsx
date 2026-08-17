import React from 'react';
import {Icon} from './Icon.jsx';
const SIZES={sm:{h:'var(--control-h-sm)',px:'var(--space-3)',fs:'var(--text-xs)',icon:14},md:{h:'var(--control-h-md)',px:'var(--space-5)',fs:'var(--text-sm)',icon:16},lg:{h:'var(--control-h-lg)',px:'var(--space-6)',fs:'var(--text-base)',icon:18}};
const VARIANTS={
  primary:{bg:'var(--action-primary)',fg:'var(--white)',bd:'transparent',hoverBg:'var(--action-primary-hover)'},
  secondary:{bg:'var(--action-secondary)',fg:'var(--white)',bd:'transparent',hoverBg:'var(--action-secondary-hover)'},
  outline:{bg:'transparent',fg:'var(--ink-800)',bd:'var(--border-default)',hoverBg:'var(--ink-100)'},
  ghost:{bg:'transparent',fg:'var(--ink-700)',bd:'transparent',hoverBg:'var(--ink-100)'},
  onDark:{bg:'var(--white)',fg:'var(--ink-900)',bd:'transparent',hoverBg:'var(--ink-200)'}
};
export function Button({children,variant='primary',size='md',icon,iconAfter,disabled,fullWidth,as='button',href,onClick,style,...rest}){
  const s=SIZES[size]||SIZES.md,v=VARIANTS[variant]||VARIANTS.primary;
  const [hover,setHover]=React.useState(false);
  const Tag=href?'a':as;
  return (
    <Tag href={href} onClick={disabled?undefined:onClick} disabled={Tag==='button'?disabled:undefined}
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} {...rest}
      style={{display:'inline-flex',alignItems:'center',justifyContent:'center',gap:'var(--space-2)',
        height:s.h,padding:`0 ${s.px}`,width:fullWidth?'100%':undefined,
        font:`var(--weight-semibold) ${s.fs}/1 var(--font-sans)`,letterSpacing:'var(--tracking-wide)',
        textTransform:'uppercase',textDecoration:'none',whiteSpace:'nowrap',
        background:disabled?'var(--action-disabled)':(hover?v.hoverBg:v.bg),
        color:disabled?'var(--action-disabled-text)':v.fg,
        border:`1px solid ${disabled?'transparent':v.bd}`,borderRadius:'var(--radius-sm)',
        cursor:disabled?'not-allowed':'pointer',transition:'var(--transition-control)',
        transform:hover&&!disabled?'translateY(-1px)':'none',...style}}>
      {icon&&<Icon name={icon} size={s.icon}/>}{children}{iconAfter&&<Icon name={iconAfter} size={s.icon}/>}
    </Tag>
  );
}
