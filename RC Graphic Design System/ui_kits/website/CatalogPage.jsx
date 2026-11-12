(()=>{
const {Button,Card,Breadcrumb}=window.RCGraphicDesignSystem_084885;

function CatalogPage({go}){
  return <main style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--space-6) var(--space-6) 0'}}>
    <Breadcrumb items={[{label:'Home',href:'#'},'All products']}/>
    <h1 style={{font:'var(--type-h1)',marginTop:'var(--space-5)'}}>All products</h1>
    <p style={{marginTop:'var(--space-3)',font:'var(--type-body)',color:'var(--text-muted)',maxWidth:'54ch'}}>
      Everything we print, with starting prices where we have them. Need something not listed? Give us a call.</p>
    {window.RC_CATEGORIES.map(c=><section key={c.slug} style={{marginTop:'var(--space-10)'}}>
      <SectionHead eyebrow={window.rcProductsIn(c.slug).length+' products'} title={c.name}/>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--space-5)'}}>
        {window.rcProductsIn(c.slug).map(p=><RcProductCard key={p.slug} p={p} go={go}/>)}
      </div>
    </section>)}
    <Card tone="tint" pad="var(--space-7)" style={{marginTop:'var(--space-10)',display:'flex',
      alignItems:'center',justifyContent:'space-between',gap:'var(--space-6)'}}>
      <div><div style={{font:'var(--type-h3)',color:'var(--text-strong)'}}>Something custom?</div>
        <p style={{font:'var(--type-body-sm)',color:'var(--ink-700)',marginTop:4}}>Menus, table tents, event programs — call or email us with the details and we will price it.</p></div>
      <Button onClick={()=>go('contact')}>Contact us</Button></Card>
  </main>;
}
Object.assign(window,{CatalogPage});

})();
