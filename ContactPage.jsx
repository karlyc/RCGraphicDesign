(()=>{
const {Button,Icon,Card,FormField,Input,Textarea,Select,Checkbox,Callout,SpecList,Badge}=window.RCGraphicDesignSystem_084885;

function ContactPage({go,onSent}){
  const [sent,setSent]=React.useState(false);
  return <main style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--space-9) var(--space-6) 0'}}>
    <div style={{display:'grid',gridTemplateColumns:'1.1fr .9fr',gap:'var(--space-9)'}}>
      <div>
        <div style={{font:'var(--type-eyebrow)',letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--pine-600)'}}>Request a quote</div>
        <h1 style={{font:'var(--type-h1)',marginTop:'var(--space-3)'}}>Tell us about the job</h1>
        <p style={{marginTop:'var(--space-3)',font:'var(--type-body)',color:'var(--text-body)',maxWidth:'50ch'}}>
          Quotes come back the same business day. If you already have a file, attach it and we will check it for press.</p>
        <Card pad="var(--space-6)" style={{marginTop:'var(--space-6)'}}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-4)'}}>
            <FormField label="Name" required htmlFor="c1"><Input id="c1" placeholder="Dana Whitlock"/></FormField>
            <FormField label="Company" htmlFor="c2"><Input id="c2" placeholder="Riverbend Landscaping"/></FormField>
            <FormField label="Email" required htmlFor="c3"><Input id="c3" placeholder="dana@riverbend.com"/></FormField>
            <FormField label="Phone" htmlFor="c4"><Input id="c4" placeholder="(704) 555-0148"/></FormField>
            <FormField label="Product" htmlFor="c5"><Select id="c5" options={window.RC_PRODUCTS.map(p=>p.name).concat(['Something else'])}/></FormField>
            <FormField label="Quantity" htmlFor="c6"><Input id="c6" suffix="pcs" placeholder="500"/></FormField>
            <FormField label="Details" htmlFor="c7" hint="Sizes, stock, colors, deadline." style={{gridColumn:'span 2'}}>
              <Textarea id="c7" rows={4} placeholder="Two-sided, 16pt matte, needed by Friday."/></FormField>
          </div>
          <div style={{marginTop:'var(--space-5)',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'var(--space-5)'}}>
            <Checkbox label="I have artwork ready to send" checked/>
            <div style={{display:'flex',gap:'var(--space-3)'}}>
              <Button variant="outline" icon="paperclip">Attach file</Button>
              <Button onClick={()=>{setSent(true);onSent&&onSent();}}>Send request</Button></div>
          </div>
          {sent&&<div style={{marginTop:'var(--space-5)'}}>
            <Callout tone="success" title="Request sent">We will reply to your email today with pricing and a turnaround date.</Callout></div>}
        </Card>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:'var(--space-5)'}}>
        <Card tone="dark" pad="var(--space-6)">
          <div style={{font:'var(--type-eyebrow)',letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--yellow-500)'}}>The shop</div>
          <div style={{marginTop:'var(--space-4)',display:'flex',flexDirection:'column',gap:'var(--space-4)'}}>
            {[['map-pin','12230 Coral Gate Dr','El Paso, TX 79936'],['phone','(915) 276-2917','Mon–Fri, 8 AM – 5 PM'],
              ['mail','rcgraphics77@gmail.com','Quotes same business day']].map(([i,a,b])=>
              <div key={a} style={{display:'flex',gap:'var(--space-3)'}}>
                <Icon name={i} size={18} color="var(--silver)" style={{marginTop:2}}/>
                <div><div style={{font:'var(--weight-semibold) var(--text-sm)/1.3 var(--font-sans)',color:'var(--white)'}}>{a}</div>
                <div style={{font:'var(--type-body-sm)',fontSize:'var(--text-xs)',color:'var(--ink-400)'}}>{b}</div></div></div>)}
          </div>
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
          <div style={{aspectRatio:'16 / 9',background:'var(--ink-200)',borderRadius:'var(--radius-sm)',
            display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:8,color:'var(--ink-500)'}}>
            <Icon name="map" size={26}/>
            <span style={{font:'var(--weight-bold) var(--text-2xs)/1 var(--font-condensed)',letterSpacing:'var(--tracking-caps-loose)',textTransform:'uppercase'}}>Shop location map</span></div>
        </Card>
      </div>
    </div>
  </main>;
}
Object.assign(window,{ContactPage});

})();
