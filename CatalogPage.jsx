(()=>{
const {Button,Icon,Card,Tag,Tabs,ProductCard,Breadcrumb,Select,Input}=window.RCGraphicDesignSystem_084885;

function CatalogPage({go}){
  const [filter,setFilter]=React.useState('All');
  const cats=['All','Next day','Signage','Office'];
  const map={'Next day':['business-cards','flyers','custom-stickers'],'Signage':['banners','yard-signs'],'Office':['carbonless-forms','business-cards']};
  const list=filter==='All'?window.RC_PRODUCTS:window.RC_PRODUCTS.filter(p=>map[filter].includes(p.slug));
  return <main style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--space-6) var(--space-6) 0'}}>
    <Breadcrumb items={[{label:'Home',href:'#'},'All products']}/>
    <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',gap:'var(--space-6)',marginTop:'var(--space-5)'}}>
      <div>
        <h1 style={{font:'var(--type-h1)'}}>All products</h1>
        <p style={{marginTop:'var(--space-3)',font:'var(--type-body)',color:'var(--text-muted)',maxWidth:'54ch'}}>
          Everything we print, with starting prices for the smallest run. Need something not listed? Ask for a quote.</p>
      </div>
      <div style={{display:'flex',gap:'var(--space-3)',alignItems:'center'}}>
        <Input icon="search" placeholder="Search products" style={{width:220}}/>
        <Select options={['Most ordered','Price: low to high','Fastest turnaround']} style={{width:200}}/>
      </div>
    </div>
    <div style={{marginTop:'var(--space-6)'}}><Tabs items={cats} value={filter} onChange={setFilter}/></div>
    <div style={{display:'flex',gap:'var(--space-2)',marginTop:'var(--space-5)'}}>
      {['Under $50','Two-sided','Outdoor'].map(t=><Tag key={t}>{t}</Tag>)}</div>
    <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--space-5)',marginTop:'var(--space-6)'}}>
      {list.map(p=><ProductCard key={p.slug} name={p.name} blurb={p.blurb} startingAt={p.from}
        turnaround={p.turnaround} icon={p.icon} image={p.image} badge={p.badge} onClick={()=>go('product')}/>)}
    </div>
    <Card tone="tint" pad="var(--space-7)" style={{marginTop:'var(--space-8)',display:'flex',
      alignItems:'center',justifyContent:'space-between',gap:'var(--space-6)'}}>
      <div><div style={{font:'var(--type-h3)',color:'var(--text-strong)'}}>Something custom?</div>
        <p style={{font:'var(--type-body-sm)',color:'var(--ink-700)',marginTop:4}}>Menus, door hangers, table tents, vehicle magnets — send the details and we will price it.</p></div>
      <Button onClick={()=>go('contact')}>Request a quote</Button></Card>
  </main>;
}
Object.assign(window,{CatalogPage});

})();
