(()=>{
const {Button,Icon,Badge,Logo}=window.RCGraphicDesignSystem_084885;

function PromoBar(){
  return <div style={{background:'var(--ink-900)',color:'var(--ink-300)',padding:'8px 0'}}>
    <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'0 var(--space-6)',display:'flex',
      alignItems:'center',justifyContent:'space-between',gap:'var(--space-4)',
      font:'var(--weight-bold) var(--text-2xs)/1 var(--font-condensed)',letterSpacing:'var(--tracking-caps)',textTransform:'uppercase'}}>
      <span style={{display:'inline-flex',alignItems:'center',gap:8}}><Icon name="zap" size={13} color="var(--yellow-500)"/>Files in by 4 PM print next day</span>
      <span style={{display:'inline-flex',alignItems:'center',gap:20}}>
        <span style={{display:'inline-flex',alignItems:'center',gap:6}}><Icon name="phone" size={13}/>(915) 276-2917</span>
        <span style={{display:'inline-flex',alignItems:'center',gap:6}}><Icon name="map-pin" size={13}/>Local pickup available</span>
      </span>
    </div>
  </div>;
}

function ProductsNavLink({route,go}){
  const [open,setOpen]=React.useState(false);
  const active=route==='catalog'||route==='product';
  return <div style={{position:'relative',display:'flex'}} onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}>
    <a href="#" onClick={e=>{e.preventDefault();go('catalog');}} style={navLinkStyle(active)}>
      All products<Icon name="chevron-down" size={14} color="var(--white)"/></a>
    {open&&<div style={{position:'absolute',top:'100%',left:'50%',transform:'translateX(-50%)',paddingTop:'var(--space-2)',minWidth:220,zIndex:40}}>
      <div style={{background:'var(--white)',border:'1px solid var(--ink-200)',borderRadius:'var(--radius-sm)',
        boxShadow:'var(--shadow-lg)',padding:'var(--space-2)',display:'flex',flexDirection:'column'}}>
        {window.RC_PRODUCTS.map(p=><a key={p.slug} href="#" onClick={e=>{e.preventDefault();setOpen(false);go('product');}}
          style={{display:'flex',alignItems:'center',gap:10,padding:'var(--space-2) var(--space-3)',borderRadius:'var(--radius-sm)',
            textDecoration:'none',color:'var(--ink-700)',font:'var(--type-body-sm)'}}
          onMouseEnter={e=>e.currentTarget.style.background='var(--ink-100)'}
          onMouseLeave={e=>e.currentTarget.style.background='transparent'}>
          <Icon name={p.icon} size={16} color="var(--pine-600)"/>{p.name}</a>)}
      </div>
    </div>}
  </div>;
}

// Shared by every nav link so they line up and match in size.
function navLinkStyle(active){
  return {display:'flex',alignItems:'center',justifyContent:'center',gap:6,width:160,height:44,boxSizing:'border-box',
    font:'var(--weight-bold) var(--text-sm)/1 var(--font-condensed)',letterSpacing:'var(--tracking-caps)',
    textTransform:'uppercase',textDecoration:'none',color:'var(--white)',opacity:active?1:.85,
    borderTop:'3px solid transparent',borderBottom:active?'3px solid var(--white)':'3px solid transparent'};
}

function NavLink({r,l,route,go}){
  return <a href="#" onClick={e=>{e.preventDefault();go(r);}} style={navLinkStyle(route===r)}>{l}</a>;
}

function Header({route,go}){
  return <header style={{position:'sticky',top:0,zIndex:30,background:'var(--white)'}}>
    <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--space-4) var(--space-6)',
      display:'flex',alignItems:'center',justifyContent:'space-between',gap:'var(--space-8)'}}>
      <a href="#" onClick={e=>{e.preventDefault();go('home');}} style={{display:'flex',alignItems:'center',gap:'var(--space-3)',textDecoration:'none'}}>
        <Logo height={52} src="assets/logo-rc-lockup-dark.png"/>
        <span style={{font:'var(--weight-bold) var(--text-md)/1.1 var(--font-condensed)',letterSpacing:'var(--tracking-caps)',
          textTransform:'uppercase',color:'var(--ink-900)',whiteSpace:'nowrap'}}>RC Graphic Designs &amp; Printing</span></a>
      <div style={{display:'flex',alignItems:'center',gap:'var(--space-2)'}}>
        <Button size="sm" icon="phone" onClick={()=>{window.location.href='tel:+19152762917';}}>Call (915) 276-2917</Button>
      </div>
    </div>
    <div style={{background:'var(--action-primary)'}}>
      <nav style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'0 var(--space-6)',
        display:'flex',alignItems:'stretch',justifyContent:'center',gap:'var(--space-4)'}}>
        <NavLink r="home" l="Home" route={route} go={go}/>
        <ProductsNavLink route={route} go={go}/>
        <NavLink r="contact" l="Contact" route={route} go={go}/>
      </nav>
    </div>
  </header>;
}

function Footer({go}){
  const cols=[['Products',['Business cards','Flyers','Carbonless forms','Banners','Yard signs','Custom stickers']],
    ['Help',['File setup guide','Templates','Turnaround times','Shipping & pickup']],
    ['Contact',[['(915) 276-2917','tel:+19152762917'],['rcgraphics77@gmail.com','mailto:rcgraphics77@gmail.com'],
      'East side El Paso, TX 79936']]];
  return <footer style={{background:'var(--ink-900)',color:'var(--ink-300)',marginTop:'var(--space-12)'}}>
    <div style={{height:6,display:'flex'}}>
      <i style={{flex:1,background:'var(--cyan-500)'}}/><i style={{flex:1,background:'var(--pine-500)'}}/>
      <i style={{flex:1,background:'var(--yellow-500)'}}/><i style={{flex:1,background:'var(--ink-950)'}}/></div>
    <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--space-10) var(--space-6)',
      display:'grid',gridTemplateColumns:'1.4fr repeat(3,1fr)',gap:'var(--space-9)'}}>
      <div>
        <Logo height={56} src="assets/logo-rc-lockup-dark.png"/>
        <p style={{marginTop:'var(--space-4)',font:'var(--type-body-sm)',color:'var(--ink-400)',maxWidth:'32ch'}}>
          Commercial printing and design out of one shop: cards, flyers, forms, banners, signs and stickers.</p>
        <div style={{marginTop:'var(--space-4)',display:'flex',gap:'var(--space-3)'}}>
          <Button variant="onDark" size="sm" onClick={()=>go('contact')}>Contact us</Button></div>
      </div>
      {cols.map(([h,items])=><div key={h}>
        <div style={{font:'var(--weight-bold) var(--text-2xs)/1 var(--font-condensed)',letterSpacing:'var(--tracking-caps-loose)',
          textTransform:'uppercase',color:'var(--silver)',marginBottom:'var(--space-4)'}}>{h}</div>
        <ul style={{listStyle:'none',margin:0,padding:0,display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
          {items.map(i=>{const [label,href]=Array.isArray(i)?i:[i];
            return <li key={label}><a href={href||'#'} onClick={href?undefined:e=>e.preventDefault()}
              style={{font:'var(--type-body-sm)',color:'var(--ink-300)',textDecoration:'none'}}>{label}</a></li>;})}
        </ul></div>)}
    </div>
    <div style={{borderTop:'1px solid var(--ink-800)'}}>
      <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--space-5) var(--space-6)',
        display:'flex',justifyContent:'space-between',font:'var(--type-body-sm)',fontSize:'var(--text-xs)',color:'var(--ink-500)'}}>
        <span>© 2026 RC Graphic Designs &amp; Printing</span>
        <span style={{display:'flex',gap:'var(--space-5)'}}><a href="#" onClick={e=>e.preventDefault()} style={{color:'var(--ink-500)'}}>Terms</a>
        <a href="#" onClick={e=>e.preventDefault()} style={{color:'var(--ink-500)'}}>Privacy</a></span>
      </div></div>
  </footer>;
}

function SectionHead({eyebrow,title,note}){
  return <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',gap:'var(--space-6)',marginBottom:'var(--space-6)'}}>
    <div>
      {eyebrow&&<div style={{font:'var(--type-eyebrow)',letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',
        color:'var(--pine-600)',marginBottom:'var(--space-2)'}}>{eyebrow}</div>}
      <h2 style={{font:'var(--type-h2)'}}>{title}</h2>
    </div>
    {note&&<span style={{font:'var(--type-body-sm)',color:'var(--text-muted)'}}>{note}</span>}
  </div>;
}
Object.assign(window,{PromoBar,Header,Footer,SectionHead});

})();
