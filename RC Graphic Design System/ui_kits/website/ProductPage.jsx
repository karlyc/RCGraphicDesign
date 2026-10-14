(()=>{
const {Button,Icon,Badge,Card,Breadcrumb,Tabs,PriceTable,SpecList,ReviewStars,Callout}=window.RCGraphicDesignSystem_084885;

function ProductPage({go}){
  const [tab,setTab]=React.useState('Specs');
  return <main style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--space-6) var(--space-6) 0'}}>
    <Breadcrumb items={[{label:'Home',href:'#'},{label:'All products',href:'#'},'Business cards']}/>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-9)',marginTop:'var(--space-6)'}}>
      <div>
        <div style={{aspectRatio:'4 / 3',border:'1px solid var(--border-subtle)',borderRadius:'var(--radius-sm)',overflow:'hidden'}}>
          <img src="../../assets/businesscards.png" alt="Business cards" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/></div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'var(--space-3)',marginTop:'var(--space-3)'}}>
          {[0,1,2,3].map(i=><div key={i} style={{aspectRatio:'1',background:'var(--ink-100)',border:i===0?'1px solid var(--border-selected)':'1px solid var(--border-subtle)',
            borderRadius:'var(--radius-sm)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--ink-400)'}}>
            <Icon name="image" size={16}/></div>)}
        </div>
        <div style={{marginTop:'var(--space-7)'}}>
          <Tabs items={['Specs','File setup','Turnaround','Reviews']} value={tab} onChange={setTab}/>
          <div style={{paddingTop:'var(--space-5)'}}>
            {tab==='Specs'&&<SpecList items={[{label:'Trim size',value:'3.5 x 2 in'},{label:'Stock',value:'14pt to 32pt'},
              {label:'Sides',value:'Both, full color'},{label:'Coating',value:'Gloss, matte or none'},
              {label:'Min order',value:'250 pieces'},{label:'Corners',value:'Square or 1/4 in rounded'}]}/>}
            {tab==='File setup'&&<div style={{display:'flex',flexDirection:'column',gap:'var(--space-4)'}}>
              <Callout tone="info" title="Add 0.125 in bleed on every side">Keep text and logos 0.25 in inside the trim line.</Callout>
              <SpecList items={[{label:'Resolution',value:'300 dpi at final size'},{label:'Color',value:'CMYK, no spot channels'},
                {label:'Files',value:'PDF, AI, EPS or PNG'}]}/>
              <p style={{font:'var(--type-body-sm)',color:'var(--text-muted)'}}>No file yet? We can design it for you. Just ask when you call.</p></div>}
            {tab==='Turnaround'&&<div style={{display:'flex',flexDirection:'column',gap:'var(--space-4)'}}>
              <Callout tone="rush" title="4 PM cutoff">Press-ready files approved before 4 PM print the next business day.</Callout>
              <SpecList items={[{label:'Next day',value:'Cards, flyers, stickers'},{label:'2 days',value:'Banners, yard signs'},
                {label:'3 days',value:'Carbonless forms'}]}/></div>}
            {tab==='Reviews'&&<div style={{display:'flex',flexDirection:'column',gap:'var(--space-5)'}}>
              <ReviewStars value={4.8} count={1240}/>
              {[['Marcus T.','Colors matched the proof exactly. Third reorder this year.'],
                ['Priya S.','The matte stock feels heavier than what I was getting online.']].map(([n,q])=>
                <div key={n}><ReviewStars value={5} size={13}/>
                <p style={{marginTop:6,font:'var(--type-body-sm)'}}>{q}</p>
                <div style={{marginTop:4,font:'var(--weight-bold) var(--text-2xs)/1 var(--font-condensed)',letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--text-muted)'}}>{n}</div></div>)}
            </div>}
          </div>
        </div>
      </div>

      <div>
        <Badge tone="rush" icon="zap">Next day available</Badge>
        <h1 style={{font:'var(--type-h1)',marginTop:'var(--space-3)'}}>Business cards</h1>
        <div style={{display:'flex',alignItems:'center',gap:'var(--space-4)',marginTop:'var(--space-3)'}}>
          <ReviewStars value={4.8} count={1240}/></div>
        <p style={{marginTop:'var(--space-4)',font:'var(--type-body)',color:'var(--text-body)',maxWidth:'52ch'}}>
          Full-color both sides on heavy stock, trimmed in-house. Free digital proof with every job.</p>

        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-6)',marginTop:'var(--space-7)'}}>
          <div>
            <Label text="Paper stocks"/>
            <SpecList items={window.RC_STOCKS.map(s=>({label:s.title,value:s.meta}))}/></div>
          <div>
            <Label text="Sizes & shapes"/>
            <SpecList items={window.RC_SIZES.map(s=>({label:s.title,value:s.meta}))}/></div>
          <div>
            <Label text="Starting prices"/>
            <PriceTable rows={window.RC_PRICES}/>
            <p style={{marginTop:'var(--space-3)',font:'var(--type-body-sm)',color:'var(--text-muted)'}}>
              Base prices on 14pt gloss. Stock, corner and rush options change the price. Call for an exact quote.</p></div>
          <div>
            <Label text="Turnaround"/>
            <SpecList items={window.RC_TURNAROUND.map(t=>({label:t.name,value:t.price}))}/></div>
        </div>

        <Card tone="dark" style={{marginTop:'var(--space-7)'}} pad="var(--space-6)">
          <div style={{font:'var(--type-eyebrow)',letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--yellow-500)'}}>Ready to order?</div>
          <h2 style={{font:'var(--type-h3)',color:'var(--white)',marginTop:'var(--space-3)'}}>Contact us directly</h2>
          <p style={{marginTop:'var(--space-2)',font:'var(--type-body-sm)',color:'var(--ink-300)',maxWidth:'46ch'}}>
            Call or email with your quantity, stock and deadline and we will get you pricing the same business day.</p>
          <div style={{marginTop:'var(--space-5)',display:'flex',gap:'var(--space-3)',flexWrap:'wrap'}}>
            <Button icon="phone" onClick={()=>{window.location.href='tel:+19152762917';}}>Call (915) 276-2917</Button>
            <Button variant="onDark" onClick={()=>go('contact')}>More ways to reach us</Button></div>
        </Card>
      </div>
    </div>
  </main>;
}

function Label({text}){
  return <div style={{display:'flex',alignItems:'center',gap:'var(--space-3)',marginBottom:'var(--space-3)'}}>
    <span style={{font:'var(--weight-bold) var(--text-sm)/1 var(--font-condensed)',letterSpacing:'var(--tracking-caps)',
      textTransform:'uppercase',color:'var(--text-strong)'}}>{text}</span>
    <span style={{flex:1,height:1,background:'var(--border-subtle)'}}/></div>;
}
Object.assign(window,{ProductPage,Label});

})();
