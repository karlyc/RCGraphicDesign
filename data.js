const RC_PRODUCTS=[
 {slug:'business-cards',name:'Business cards',icon:'credit-card',blurb:'16pt, 3.5 x 2 in, full color both sides',from:'$24.50',turnaround:'Next day',badge:'Popular',image:'assets/businesscards.png'},
 {slug:'flyers',name:'Flyers',icon:'file-text',blurb:'8.5 x 11 in, 100lb gloss text',from:'$38.00',turnaround:'Next day',image:'assets/flyers.png'},
 {slug:'carbonless-forms',name:'Carbonless forms',icon:'files',blurb:'2 or 3 part, sequentially numbered',from:'$68.00',turnaround:'3 days',image:'assets/carbonlessforms.png'},
 {slug:'banners',name:'Banners',icon:'flag',blurb:'13oz vinyl, hemmed with grommets',from:'$54.00',turnaround:'2 days',image:'assets/banners.png'},
 {slug:'yard-signs',name:'Yard signs',icon:'signpost',blurb:'18 x 24 in coroplast + H-stake',from:'$11.00',turnaround:'2 days',image:'assets/yardsign.png'},
 {slug:'custom-stickers',name:'Custom stickers',icon:'sticker',blurb:'Die-cut vinyl, indoor or outdoor',from:'$19.00',turnaround:'3 days',image:'assets/stickers.png'}
];
const RC_STOCKS=[
 {title:'14pt gloss',meta:'Coated both sides',priceNote:'Included',swatch:'#F4F4F2'},
 {title:'16pt matte',meta:'Soft uncoated feel',priceNote:'+$14',swatch:'#EFEDE7'},
 {title:'18pt uncoated',meta:'Writable surface',priceNote:'+$22',swatch:'#E9E4DA'},
 {title:'32pt ultra thick',meta:'Painted edge available',priceNote:'+$46',swatch:'#DFD8CB'}
];
const RC_SIZES=[
 {title:'3.5 x 2 in',meta:'Standard US',priceNote:'Included'},
 {title:'3.5 x 2 in rounded',meta:'1/4 in corners',priceNote:'+$12'},
 {title:'2 x 3.5 in vertical',meta:'Portrait layout',priceNote:'Included'}
];
const RC_PRICES=[
 {qty:250,each:'$0.14',total:'$35.00'},
 {qty:500,each:'$0.09',total:'$45.00',note:'Best value'},
 {qty:1000,each:'$0.07',total:'$70.00'},
 {qty:2500,each:'$0.05',total:'$125.00'}
];
const RC_TURNAROUND=[
 {name:'Next day',shipsBy:'Ready Thu, Aug 14',price:'+$18',recommended:true},
 {name:'2 business days',shipsBy:'Ready Fri, Aug 15',price:'+$9'},
 {name:'3 business days',shipsBy:'Ready Mon, Aug 18',price:'Included'}
];
Object.assign(window,{RC_PRODUCTS,RC_STOCKS,RC_SIZES,RC_PRICES,RC_TURNAROUND});
