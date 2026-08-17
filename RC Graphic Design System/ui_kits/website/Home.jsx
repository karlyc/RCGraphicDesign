(()=>{
const {Button,Icon,Badge,Card,ProductCard,ReviewStars,Callout,Logo}=window.RCGraphicDesignSystem_084885;

function Hero({go}){
  return <section style={{background:'var(--ink-700)',color:'var(--white)',position:'relative',overflow:'hidden'}}>
    <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--space-11) var(--space-6)',
      display:'grid',gridTemplateColumns:'1.1fr .9fr',gap:'var(--space-10)',alignItems:'center'}}>
      <div>
        <Badge tone="rush" solid icon="zap">Next-day printing</Badge>
        <h1 style={{font:'var(--type-display)',color:'var(--white)',letterSpacing:'var(--tracking-tight)',margin:'var(--space-4) 0 0'}}>
          Printed right, printed fast.</h1>
        <p style={{marginTop:'var(--space-4)',font:'var(--type-body)',fontSize:'var(--text-md)',color:'var(--ink-300)',maxWidth:'46ch',textWrap:'pretty'}}>
          Our printing services combine cutting-edge technology with meticulous attention to detail, ensuring your projects meet the highest standards of quality and professionalism. Trust us to deliver seamless, precise results that reflect your brand's excellence. We also offer the best prices in the El Paso County. As the only Union Printer in El Paso, we can match other printer’s prices if not beat their prices.</p>
        <div style={{display:'flex',gap:'var(--space-3)',marginTop:'var(--space-7)'}}>
          <Button size="lg" onClick={()=>go('product')} iconAfter="arrow-right">Start your order</Button>
          <Button size="lg" variant="onDark" onClick={()=>go('contact')}>Get a quote</Button>
        </div>
        <div style={{display:'flex',gap:'var(--space-7)',marginTop:'var(--space-8)',flexWrap:'wrap'}}>
          {[['printer','In-house press'],['badge-check','Free digital proof'],['truck','Ship or pick up']].map(([i,l])=>
            <span key={l} style={{display:'inline-flex',alignItems:'center',gap:8,font:'var(--weight-bold) var(--text-2xs)/1 var(--font-condensed)',
              letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--silver)'}}>
              <Icon name={i} size={16} color="var(--silver)"/>{l}</span>)}
        </div>
      </div>
      <div style={{aspectRatio:'4 / 3',border:'1px solid var(--ink-600)',borderRadius:'var(--radius-sm)',overflow:'hidden'}}>
        <img src="../../assets/graphicdesignhero.jpg" alt="Printed samples from RC Graphic Designs & Printing"
          style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>
      </div>
    </div>
    <div style={{height:6,display:'flex'}}><i style={{flex:1,background:'var(--cyan-500)'}}/><i style={{flex:1,background:'var(--pine-500)'}}/>
      <i style={{flex:1,background:'var(--yellow-500)'}}/><i style={{flex:1,background:'var(--ink-950)'}}/></div>
  </section>;
}




function Home({go,onAdd}){
  return <main>
    <Hero go={go}/>
    <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--space-10) var(--space-6) 0'}}>
      <SectionHead eyebrow="What we print" title="Six things, done properly" note="Prices shown are for the smallest run."/>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--space-5)'}}>
        {window.RC_PRODUCTS.map(p=><ProductCard key={p.slug} name={p.name} blurb={p.blurb} startingAt={p.from}
          turnaround={p.turnaround} icon={p.icon} image={p.image} badge={p.badge} onClick={()=>go('product')}/>)}
      </div>
    </div>

    <div style={{marginTop:'var(--space-11)'}}><CustomPrinting/></div>

    <section style={{marginTop:'var(--space-11)',background:'var(--surface-sunken)'}}>
      <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--space-11) var(--space-6)'}}>
        <SectionHead eyebrow="How it works" title="File to doorstep in four steps"/>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'var(--space-5)'}}>
          {[['upload','Send your file','PDF, AI or a photo of a sketch.'],
            ['pen-tool','We set it up','Bleed, trim and color checked by hand.'],
            ['badge-check','Approve the proof','Digital proof back the same day.'],
            ['truck','Print & deliver','Ship anywhere or pick up in shop.']].map(([i,t,d],n)=>
            <Card key={t} pad="var(--space-5)">
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <Icon name={i} size={22} color="var(--pine-500)"/>
                <span style={{font:'var(--weight-bold) var(--text-2xl)/1 var(--font-display)',color:'var(--ink-200)'}}>{n+1}</span></div>
              <div style={{marginTop:'var(--space-4)',font:'var(--type-h3)',color:'var(--text-strong)'}}>{t}</div>
              <p style={{marginTop:6,font:'var(--type-body-sm)',color:'var(--text-muted)'}}>{d}</p>
            </Card>)}
        </div>
      </div>
    </section>
   
    

    <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--space-11) var(--space-6) 0'}}>
      <div style={{display:'grid',gridTemplateColumns:'1.3fr 1fr',gap:'var(--space-7)',alignItems:'start'}}>
        <Card tone="dark" pad="var(--space-8)">
          <div style={{font:'var(--type-eyebrow)',letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--yellow-500)'}}>Design services</div>
          <h2 style={{font:'var(--type-h2)',color:'var(--white)',marginTop:'var(--space-3)'}}>No artwork? We will draw it up.</h2>
          <p style={{marginTop:'var(--space-3)',font:'var(--type-body)',color:'var(--ink-300)',maxWidth:'48ch'}}>
            Send a logo, a rough sketch or just your details. Layout and press setup start at $45 and include one round of revisions.</p>
          <div style={{marginTop:'var(--space-6)',display:'flex',gap:'var(--space-3)'}}>
            <Button variant="onDark" onClick={()=>go('contact')}>Talk to a designer</Button>
            <Button variant="ghost" style={{color:'var(--ink-300)'}}>See samples</Button></div>
        </Card>
        <Card pad="var(--space-6)">
          <ReviewStars value={4.8} count={1240}/>
          <p style={{marginTop:'var(--space-4)',font:'var(--type-body)',color:'var(--text-body)'}}>
            "Dropped off a napkin sketch on Tuesday, had 500 cards and a banner Thursday morning. The proof caught a typo I missed."</p>
          <div style={{marginTop:'var(--space-4)',font:'var(--weight-bold) var(--text-2xs)/1.4 var(--font-condensed)',
            letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--text-muted)'}}>Dana W. · Riverbend Landscaping</div>
          <div style={{marginTop:'var(--space-5)'}}>
            <Callout tone="info" title="Reorders are one click">Past jobs stay on file for exact reprints.</Callout></div>
        </Card>
      </div>
    </div>
  </main>;
}

function CustomPrinting(){
  return <section style={{background:'var(--ink-700)',color:'var(--white)',position:'relative',overflow:'hidden'}}>
    <div style={{maxWidth:'var(--container-max)',margin:'0 auto',display:'grid',gridTemplateColumns:'.42fr 1fr',alignItems:'stretch'}}>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'var(--space-4)',
        padding:'var(--space-9) var(--space-6)',background:'var(--ink-900)',borderRight:'3px solid var(--pine-500)'}}>
        <Logo height={44} src="../../assets/logo-rc-lockup-dark.png"/>
        <span style={{font:'var(--weight-bold) var(--text-2xs)/1 var(--font-condensed)',letterSpacing:'var(--tracking-caps-loose)',
          textTransform:'uppercase',color:'var(--silver)',textAlign:'center'}}>Graphic Designs &amp; Printing</span>
      </div>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',gap:'var(--space-5)',
        padding:'var(--space-9) var(--space-8)'}}>
        <div style={{display:'flex',alignItems:'center',gap:'var(--space-4)'}}>
          <span style={{font:'var(--weight-bold) var(--text-xs)/1 var(--font-condensed)',letterSpacing:'var(--tracking-caps)',
            textTransform:'uppercase',color:'var(--pine-500)'}}>Business cards · Flyers · Banners · Yard signs · Stickers</span>
          <span style={{flex:1,height:1,background:'var(--pine-500)',opacity:.55}}/>
        </div>
        <h2 style={{font:'var(--type-display)',fontSize:'var(--text-4xl)',color:'var(--white)',letterSpacing:'var(--tracking-tight)'}}>
          Customized printing</h2>
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-2)',font:'var(--type-body)',fontSize:'var(--text-md)',
          color:'var(--ink-200)',maxWidth:'52ch'}}>
          <span>We print almost anything. Call us to inquire.</span>
          <span>We match or beat other competitors' prices.</span>
        </div>
        <div style={{display:'flex',alignItems:'baseline',gap:'var(--space-4)',marginTop:'var(--space-2)'}}>
          <span style={{font:'var(--weight-bold) var(--text-sm)/1 var(--font-condensed)',letterSpacing:'var(--tracking-caps)',
            textTransform:'uppercase',color:'var(--silver)'}}>Call</span>
          <a href="tel:+19152762917" style={{font:'var(--weight-bold) var(--text-2xl)/1 var(--font-sans)',color:'var(--pine-500)',
            textDecoration:'none',letterSpacing:'var(--tracking-tight)'}}>(915) 276-2917</a>
        </div>
      </div>
    </div>
    <div style={{height:6,display:'flex'}}><i style={{flex:1,background:'var(--cyan-500)'}}/><i style={{flex:1,background:'var(--pine-500)'}}/>
      <i style={{flex:1,background:'var(--yellow-500)'}}/><i style={{flex:1,background:'var(--ink-950)'}}/></div>
  </section>;
}
Object.assign(window,{Home,Hero});

})();
