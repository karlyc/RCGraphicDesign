(()=>{
const {Icon,Card,SpecList,Badge}=window.RCGraphicDesignSystem_084885;

function ContactPage(){
  const ways=[
    ['phone','Call us','(915) 276-2917','tel:+19152762917','Mon–Fri, 8 AM – 5 PM. The fastest way to get pricing.'],
    ['mail','Email us','rcgraphics77@gmail.com','mailto:rcgraphics77@gmail.com','Attach your artwork. We reply the same business day.'],
    ['map-pin','Where we are','East side El Paso, TX 79936',null,'Call or email ahead to set up a visit or a pickup.']];
  return <main style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--space-9) var(--space-6) 0'}}>
    <div style={{display:'grid',gridTemplateColumns:'1.1fr .9fr',gap:'var(--space-9)'}}>
      <div>
        <div style={{font:'var(--type-eyebrow)',letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--pine-600)'}}>Contact us</div>
        <h1 style={{font:'var(--type-h1)',marginTop:'var(--space-3)'}}>Talk to us about your job</h1>
        <p style={{marginTop:'var(--space-3)',font:'var(--type-body)',color:'var(--text-body)',maxWidth:'50ch'}}>
          We take every order directly so we can get the details right. Reach out by phone, email or in person and we will
          give you pricing and a turnaround date.</p>
        <div style={{marginTop:'var(--space-6)',display:'flex',flexDirection:'column',gap:'var(--space-4)'}}>
          {ways.map(([i,t,v,href,d])=><Card key={t} pad="var(--space-6)">
            <div style={{display:'flex',gap:'var(--space-5)',alignItems:'flex-start'}}>
              <span style={{width:44,height:44,flex:'none',display:'flex',alignItems:'center',justifyContent:'center',
                background:'var(--surface-tint)',borderRadius:'var(--radius-sm)'}}><Icon name={i} size={22} color="var(--pine-600)"/></span>
              <div>
                <div style={{font:'var(--weight-bold) var(--text-sm)/1 var(--font-condensed)',letterSpacing:'var(--tracking-caps)',
                  textTransform:'uppercase',color:'var(--text-muted)'}}>{t}</div>
                {href
                  ?<a href={href} style={{display:'block',marginTop:'var(--space-2)',font:'var(--weight-bold) var(--text-xl)/1.2 var(--font-sans)',
                    color:'var(--pine-600)',textDecoration:'none'}}>{v}</a>
                  :<div style={{marginTop:'var(--space-2)',font:'var(--weight-bold) var(--text-xl)/1.2 var(--font-sans)',color:'var(--text-strong)'}}>{v}</div>}
                <p style={{marginTop:'var(--space-2)',font:'var(--type-body-sm)',color:'var(--text-muted)'}}>{d}</p>
              </div>
            </div>
          </Card>)}
        </div>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:'var(--space-5)'}}>
        <Card tone="dark" pad="var(--space-6)">
          <div style={{font:'var(--type-eyebrow)',letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--yellow-500)'}}>Have this ready</div>
          <ul style={{marginTop:'var(--space-4)',padding:0,listStyle:'none',display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
            {['What you need printed','Quantity','Size, paper stock and colors','Your deadline','Artwork, if you have it'].map(l=>
              <li key={l} style={{display:'flex',gap:'var(--space-3)',alignItems:'center',font:'var(--type-body-sm)',color:'var(--ink-200)'}}>
                <Icon name="check" size={16} color="var(--pine-500)"/>{l}</li>)}
          </ul>
        </Card>
        <Card pad="var(--space-6)">
          <div style={{font:'var(--weight-bold) var(--text-sm)/1 var(--font-condensed)',letterSpacing:'var(--tracking-caps)',
            textTransform:'uppercase',marginBottom:'var(--space-4)'}}>Turnaround at a glance</div>
          <SpecList items={[{label:'Cards',value:'Next day'},{label:'Flyers',value:'Next day'},
            {label:'Stickers',value:'Next day'},{label:'Banners',value:'2 business days'},
            {label:'Yard signs',value:'2 business days'},{label:'Forms',value:'3 business days'}]}/>
          <div style={{marginTop:'var(--space-5)'}}><Badge tone="rush" icon="zap">4 PM file cutoff</Badge></div>
        </Card>
        <Card pad="var(--space-6)" style={{background:'var(--ink-100)'}}>
          <iframe title="Map of El Paso, TX 79936" src="https://maps.google.com/maps?q=El%20Paso%2C%20TX%2079936&z=13&output=embed"
            loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            style={{display:'block',width:'100%',aspectRatio:'16 / 9',border:0,borderRadius:'var(--radius-sm)'}}/>
        </Card>
      </div>
    </div>
  </main>;
}
Object.assign(window,{ContactPage});

})();
