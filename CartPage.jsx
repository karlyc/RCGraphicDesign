(()=>{
const {Button,Icon,Card,Stepper,SpecList,Callout,Input,Select,Checkbox,FormField,Badge,Toast}=window.RCGraphicDesignSystem_084885;

function CartPage({go,items,onRemove}){
  const sub=items.reduce((s,i)=>s+Number(i.total),0);
  const ship=items.length?12:0,tax=sub*0.0725;
  return <main style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--space-7) var(--space-6) 0'}}>
    <Stepper steps={['Specs','Artwork','Proof','Checkout']} current={3}/>
    <h1 style={{font:'var(--type-h1)',marginTop:'var(--space-6)'}}>Your cart</h1>
    <div style={{display:'grid',gridTemplateColumns:'1.5fr 1fr',gap:'var(--space-8)',marginTop:'var(--space-6)'}}>
      <div style={{display:'flex',flexDirection:'column',gap:'var(--space-5)'}}>
        {items.length===0&&<Card pad="var(--space-8)" style={{textAlign:'center'}}>
          <Icon name="shopping-cart" size={28} color="var(--ink-400)" style={{margin:'0 auto'}}/>
          <div style={{font:'var(--type-h3)',marginTop:'var(--space-4)'}}>Nothing in the cart yet</div>
          <p style={{font:'var(--type-body-sm)',color:'var(--text-muted)',marginTop:6}}>Configure a product to see it here.</p>
          <div style={{marginTop:'var(--space-5)'}}><Button onClick={()=>go('product')}>Browse products</Button></div></Card>}
        {items.map((it,i)=><Card key={i} pad="var(--space-5)">
          <div style={{display:'flex',gap:'var(--space-5)'}}>
            <div style={{width:96,height:72,flex:'none',background:'var(--ink-100)',borderRadius:'var(--radius-sm)',
              display:'flex',alignItems:'center',justifyContent:'center',color:'var(--ink-400)'}}><Icon name="credit-card" size={22}/></div>
            <div style={{flex:1,minWidth:0}}>
              <div style={{display:'flex',justifyContent:'space-between',gap:'var(--space-4)'}}>
                <span style={{font:'var(--type-h3)'}}>Business cards</span>
                <span style={{font:'var(--weight-bold) var(--text-md)/1 var(--font-sans)',color:'var(--text-strong)'}}>${it.total}</span></div>
              <div style={{marginTop:'var(--space-3)'}}>
                <SpecList items={[{label:'Quantity',value:it.qty.toLocaleString()},{label:'Stock',value:it.stock},{label:'Turnaround',value:it.turn}]}/></div>
              <div style={{display:'flex',alignItems:'center',gap:'var(--space-4)',marginTop:'var(--space-4)'}}>
                <Badge tone="warning" icon="upload">Artwork pending</Badge>
                <Button variant="ghost" size="sm" icon="upload">Add file</Button>
                <Button variant="ghost" size="sm" onClick={()=>onRemove(i)}>Remove</Button></div>
            </div></div></Card>)}
        {items.length>0&&<Callout tone="rush" title="Approve your proof by 4 PM to keep next-day printing">
          We email a digital proof within two hours of receiving artwork.</Callout>}

        <Card pad="var(--space-6)">
          <div style={{font:'var(--weight-bold) var(--text-sm)/1 var(--font-condensed)',letterSpacing:'var(--tracking-caps)',
            textTransform:'uppercase',marginBottom:'var(--space-5)'}}>Delivery</div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-4)'}}>
            <FormField label="Full name" htmlFor="n1"><Input id="n1" defaultValue="Dana Whitlock"/></FormField>
            <FormField label="Company" htmlFor="n2"><Input id="n2" defaultValue="Riverbend Landscaping"/></FormField>
            <FormField label="Address" htmlFor="n3" style={{gridColumn:'span 2'}}><Input id="n3" defaultValue="418 Mill Creek Rd"/></FormField>
            <FormField label="City" htmlFor="n4"><Input id="n4" defaultValue="Charlotte"/></FormField>
            <FormField label="State" htmlFor="n5"><Select id="n5" options={['NC','SC','GA','VA']}/></FormField>
          </div>
          <div style={{marginTop:'var(--space-5)',display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
            <Checkbox label="Pick up at the shop instead" description="Ready for pickup 8 AM – 5 PM weekdays"/>
            <Checkbox label="Email me when the proof is ready" checked/></div>
        </Card>
      </div>

      <div>
        <Card pad="var(--space-6)" style={{position:'sticky',top:'var(--space-9)'}}>
          <div style={{font:'var(--type-h3)'}}>Order summary</div>
          <div style={{display:'flex',flexDirection:'column',gap:'var(--space-3)',marginTop:'var(--space-5)'}}>
            {[['Subtotal','$'+sub.toFixed(2)],['Shipping','$'+ship.toFixed(2)],['Tax (7.25%)','$'+tax.toFixed(2)]].map(([l,v])=>
              <div key={l} style={{display:'flex',justifyContent:'space-between',font:'var(--type-body-sm)'}}>
                <span style={{color:'var(--text-muted)'}}>{l}</span><b style={{color:'var(--text-strong)'}}>{v}</b></div>)}
          </div>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',marginTop:'var(--space-5)',
            paddingTop:'var(--space-4)',borderTop:'1px solid var(--border-subtle)'}}>
            <span style={{font:'var(--weight-bold) var(--text-sm)/1 var(--font-condensed)',letterSpacing:'var(--tracking-caps)',textTransform:'uppercase'}}>Total</span>
            <span style={{font:'var(--weight-bold) var(--text-2xl)/1 var(--font-sans)',color:'var(--text-strong)'}}>${(sub+ship+tax).toFixed(2)}</span></div>
          <div style={{marginTop:'var(--space-6)',display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
            <Button size="lg" fullWidth disabled={!items.length} iconAfter="lock">Place order</Button>
            <Button variant="ghost" fullWidth onClick={()=>go('product')}>Keep configuring</Button></div>
          <div style={{marginTop:'var(--space-5)',display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
            {[['badge-check','Free digital proof'],['printer','Printed in-house'],['phone','(704) 555-0148']].map(([i,l])=>
              <span key={l} style={{display:'inline-flex',alignItems:'center',gap:8,font:'var(--type-body-sm)',fontSize:'var(--text-xs)',color:'var(--text-muted)'}}>
                <Icon name={i} size={14} color="var(--ink-400)"/>{l}</span>)}</div>
        </Card>
      </div>
    </div>
  </main>;
}
Object.assign(window,{CartPage});

})();
