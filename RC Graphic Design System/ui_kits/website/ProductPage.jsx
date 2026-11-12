(()=>{
const {Button,Icon,Card,Breadcrumb}=window.RCGraphicDesignSystem_084885;

function ProductPage({go,slug}){
  const p=window.rcProduct(slug);
  const cat=window.RC_CATEGORIES.find(c=>c.slug===p.category);
  return <main style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--space-6) var(--space-6) 0'}}>
    <Breadcrumb items={[{label:'Home',href:'#'},{label:'All products',href:'#'},p.name]}/>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-9)',marginTop:'var(--space-6)',alignItems:'start'}}>
      <div style={{aspectRatio:'4 / 3',border:'1px solid var(--border-subtle)',borderRadius:'var(--radius-sm)',overflow:'hidden',
        background:'var(--ink-100)',display:'flex',alignItems:'center',justifyContent:'center'}}>
        {p.image
          ?<img src={p.image} alt={p.name} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>
          :<Icon name={p.icon} size={64} color="var(--ink-400)"/>}
      </div>

      <div>
        <div style={{font:'var(--type-eyebrow)',letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--pine-600)'}}>{cat&&cat.name}</div>
        <h1 style={{font:'var(--type-h1)',marginTop:'var(--space-3)'}}>{p.name}</h1>
        <p style={{marginTop:'var(--space-4)',font:'var(--type-body)',color:'var(--text-body)',maxWidth:'52ch'}}>{p.blurb}</p>

        <div style={{marginTop:'var(--space-6)',paddingTop:'var(--space-5)',borderTop:'1px solid var(--border-subtle)'}}>
          {p.price
            ?<div style={{display:'flex',alignItems:'baseline',gap:'var(--space-3)',flexWrap:'wrap'}}>
              <span style={{font:'var(--weight-bold) var(--text-sm)/1 var(--font-condensed)',letterSpacing:'var(--tracking-caps)',
                textTransform:'uppercase',color:'var(--text-muted)'}}>Starting at</span>
              <span style={{font:'var(--weight-bold) var(--text-3xl)/1 var(--font-sans)',color:'var(--text-strong)'}}>{p.price}</span>
              <span style={{font:'var(--type-body-sm)',color:'var(--text-muted)'}}>for {p.priceQty} pieces</span></div>
            :<div style={{display:'flex',alignItems:'center',gap:'var(--space-3)'}}>
              <Icon name="phone" size={20} color="var(--pine-600)"/>
              <span style={{font:'var(--weight-bold) var(--text-xl)/1.2 var(--font-sans)',color:'var(--text-strong)'}}>Call for pricing</span></div>}
        </div>

        <Card tone="dark" style={{marginTop:'var(--space-7)'}} pad="var(--space-6)">
          <div style={{font:'var(--type-eyebrow)',letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--yellow-500)'}}>Ready to order?</div>
          <h2 style={{font:'var(--type-h3)',color:'var(--white)',marginTop:'var(--space-3)'}}>Contact us directly</h2>
          <p style={{marginTop:'var(--space-2)',font:'var(--type-body-sm)',color:'var(--ink-300)',maxWidth:'46ch'}}>
            Call or email with your quantity, size and deadline and we will get you pricing the same business day.</p>
          <div style={{marginTop:'var(--space-5)',display:'flex',gap:'var(--space-3)',flexWrap:'wrap'}}>
            <Button icon="phone" onClick={()=>{window.location.href='tel:+19152762917';}}>Call (915) 276-2917</Button>
            <Button variant="onDark" onClick={()=>go('contact')}>More ways to reach us</Button></div>
        </Card>
      </div>
    </div>
  </main>;
}
Object.assign(window,{ProductPage});

})();
