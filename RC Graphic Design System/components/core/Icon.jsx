import React from 'react';
const BASE='https://unpkg.com/lucide-static@0.469.0/icons/';
export function Icon({name,size=20,color='currentColor',strokeWidth,style,...rest}){
  const url=`${BASE}${name}.svg`;
  return <span aria-hidden="true" {...rest} style={{display:'inline-block',flex:'none',width:size,height:size,background:color,WebkitMaskImage:`url(${url})`,maskImage:`url(${url})`,WebkitMaskSize:'contain',maskSize:'contain',WebkitMaskRepeat:'no-repeat',maskRepeat:'no-repeat',WebkitMaskPosition:'center',maskPosition:'center',...style}}/>;
}
