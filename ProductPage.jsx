(()=>{
const {Button,Icon,Badge,Card,Breadcrumb,Tabs,OptionTile,QuantityStepper,PriceTable,TurnaroundOption,SpecList,ReviewStars,Callout,Checkbox,FormField,Select,Tooltip}=window.RCGraphicDesignSystem_084885;

function ProductPage({go,onAdd}){
  const [stock,setStock]=React.useState('16pt matte');
  const [size,setSize]=React.useState('3.5 x 2 in');
  const [qty,setQty]=React.useState(500);
  const [turn,setTurn]=React.useState('Next day');
  const [tab,setTab]=React.useState('Specs');
  const [rounded,setRounded]=React.useState(false);
  const row=window.RC_PRICES.find(r=>r.qty===qty)||window.RC_PRICES[1];
  const base=Number(row.total.replace(/[^0-9.]/g,''));
  const stockAdd=({'16pt matte':14,'18pt uncoated':22,'32pt ultra thick':46})[stock]||0;
  const turnAdd=({'Next day':18,'2 business days':9})[turn]||0;
  const total=(base+stockAdd+turnAdd+(rounded?12:0)).toFixed(2);
  return <main style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--space-6) var(--space-6) 0'}}>
    <Breadcrumb items={[{label:'Home',href:'#'},{label:'All products',href:'#'},'Business cards']}/>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-9)',marginTop:'var(--space-6)'}}>
      <div>
        <div style={{aspectRatio:'4 / 3',border:'1px solid var(--border-subtle)',borderRadius:'var(--radius-sm)',overflow:'hidden'}}>
          <img src="assets/businesscards.png" alt="Business cards" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/></div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'var(--space-3)',marginTop:'var(--space-3)'}}>
          {[0,1,2,3].map(i=><div key={i} style={{aspectRatio:'1',background:'var(--ink-100)',border:i===0?'1px solid var(--border-selected)':'1px solid var(--border-subtle)',
            borderRadius:'var(--radius-sm)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--ink-400)'}}>
            <Icon name="image" size={16}/></div>)}
        </div>
        <div style={{marginTop:'var(--space-7)'}}>
          <Tabs items={['Specs','File setup','Turnaround','Reviews']} value={tab} onChange={setTab}/>
          <div style={{paddingTop:'var(--space-5)'}}>
            {tab==='Specs'&&<SpecList items={[{label:'Trim size',value:size},{label:'Stock',value:stock},
              {label:'Sides',value:'Both, full color'},{label:'Coating',value:'Gloss, matte or none'},
              {label:'Min order',value:'250 pieces'},{label:'Corners',value:rounded?'1/4 in rounded':'Square'}]}/>}
            {tab==='File setup'&&<div style={{display:'flex',flexDirection:'column',gap:'var(--space-4)'}}>
              <Callout tone="info" title="Add 0.125 in bleed on every side">Keep text and logos 0.25 in inside the trim line.</Callout>
              <SpecList items={[{label:'Resolution',value:'300 dpi at final size'},{label:'Color',value:'CMYK, no spot channels'},
                {label:'Files',value:'PDF, AI, EPS or PNG'}]}/>
              <div><Button variant="outline" icon="download">Download template</Button></div></div>}
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
          <ReviewStars value={4.8} count={1240}/>
          <span style={{font:'var(--type-body-sm)',color:'var(--text-muted)'}}>SKU BC-16PT</span></div>
        <p style={{marginTop:'var(--space-4)',font:'var(--type-body)',color:'var(--text-body)',maxWidth:'52ch'}}>
          Full-color both sides on heavy stock, trimmed in-house. Free digital proof with every order.</p>

        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-6)',marginTop:'var(--space-7)'}}>
          <div>
            <Label n="1" text="Paper stock"/>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-2)'}}>
              {window.RC_STOCKS.map(s=><OptionTile key={s.title} {...s} selected={stock===s.title} onClick={()=>setStock(s.title)}/>)}
            </div></div>
          <div>
            <Label n="2" text="Size & shape"/>
            <div style={{display:'flex',flexDirection:'column',gap:'var(--space-2)'}}>
              {window.RC_SIZES.map(s=><OptionTile key={s.title} {...s} icon="ruler" selected={size===s.title} onClick={()=>setSize(s.title)}/>)}
            </div>
            <div style={{marginTop:'var(--space-3)'}}>
              <Checkbox label="Rounded corners" description="+$12 per run" checked={rounded} onChange={()=>setRounded(!rounded)}/></div>
          </div>
          <div>
            <Label n="3" text="Quantity"/>
            <div style={{display:'flex',alignItems:'center',gap:'var(--space-4)',marginBottom:'var(--space-3)'}}>
              <QuantityStepper value={qty} step={250} min={250} onChange={setQty}/>
              <span style={{font:'var(--type-body-sm)',color:'var(--text-muted)'}}>Price breaks at 500 and 1,000.</span></div>
            <PriceTable rows={window.RC_PRICES} selected={qty} onSelect={setQty}/></div>
          <div>
            <Label n="4" text="Turnaround"/>
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--space-3)'}}>
              {window.RC_TURNAROUND.map(t=><TurnaroundOption key={t.name} {...t} selected={turn===t.name} onClick={()=>setTurn(t.name)}/>)}
            </div></div>
        </div>

        <Card style={{marginTop:'var(--space-7)',position:'sticky',bottom:'var(--space-4)'}} pad="var(--space-5)">
          <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',gap:'var(--space-5)'}}>
            <div>
              <div style={{font:'var(--weight-bold) var(--text-2xs)/1.4 var(--font-condensed)',letterSpacing:'var(--tracking-caps)',
                textTransform:'uppercase',color:'var(--text-muted)'}}>{qty.toLocaleString()} · {stock} · {turn}</div>
              <div style={{font:'var(--weight-bold) var(--text-2xl)/1 var(--font-sans)',color:'var(--text-strong)',marginTop:6}}>${total}</div>
              <div style={{font:'var(--type-body-sm)',fontSize:'var(--text-xs)',color:'var(--text-muted)',marginTop:4}}>{row.each} each · tax calculated at checkout</div>
            </div>
            <div style={{display:'flex',gap:'var(--space-3)'}}>
              <Button variant="outline" icon="upload">Upload file</Button>
              <Button size="lg" onClick={()=>{onAdd({qty,stock,turn,total});go('cart');}}>Add to cart</Button></div>
          </div>
        </Card>
      </div>
    </div>
  </main>;
}

function Label({n,text}){
  return <div style={{display:'flex',alignItems:'center',gap:'var(--space-3)',marginBottom:'var(--space-3)'}}>
    <span style={{width:20,height:20,flex:'none',display:'flex',alignItems:'center',justifyContent:'center',
      background:'var(--ink-800)',color:'var(--white)',borderRadius:'var(--radius-pill)',
      font:'var(--weight-bold) var(--text-3xs)/1 var(--font-sans)'}}>{n}</span>
    <span style={{font:'var(--weight-bold) var(--text-sm)/1 var(--font-condensed)',letterSpacing:'var(--tracking-caps)',
      textTransform:'uppercase',color:'var(--text-strong)'}}>{text}</span>
    <span style={{flex:1,height:1,background:'var(--border-subtle)'}}/></div>;
}
Object.assign(window,{ProductPage,Label});

})();
