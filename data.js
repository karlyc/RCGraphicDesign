const RC_CATEGORIES=[
 {slug:'business-essentials',name:'Business Essentials',icon:'briefcase'},
 {slug:'labels-stickers',name:'Labels & Stickers',icon:'sticker'},
 {slug:'banners-signs',name:'Banners & Signs',icon:'flag'},
 {slug:'t-shirts',name:'T-Shirts',icon:'shirt'}
];
// price/priceQty are "starting at" figures; products without a price show "Call for pricing".
const RC_PRODUCTS=[
 {slug:'business-cards',name:'Business Cards',category:'business-essentials',icon:'credit-card',blurb:'Full color both sides on heavy card stock.',price:'$60',priceQty:'500',image:'assets/businesscards.png'},
 {slug:'flyers',name:'Flyers',category:'business-essentials',icon:'file-text',blurb:'Bright, full-color flyers for promotions and events.',price:'$75',priceQty:'100',image:'assets/flyers.png'},
 {slug:'invoices',name:'Invoices',category:'business-essentials',icon:'receipt',blurb:'Carbonless 2 or 3 part forms, sequentially numbered.',image:'assets/carbonlessforms.png'},
 {slug:'brochures',name:'Brochures',category:'business-essentials',icon:'book-open',blurb:'Bi-fold and tri-fold brochures that tell your story.',price:'$98',priceQty:'100',image:'assets/brochure.png'},
 {slug:'posters',name:'Posters',category:'business-essentials',icon:'frame',blurb:'Large-format posters for windows, walls and events.',image:'assets/signs.png'},
 {slug:'envelopes',name:'Envelopes',category:'business-essentials',icon:'mail',blurb:'Printed envelopes with your logo and return address.',image:'assets/envelopes.jpg'},
 {slug:'direct-mail',name:'Direct Mail',category:'business-essentials',icon:'send',blurb:'Mailers that put your business in local mailboxes.',image:'assets/directmail.jpeg'},
 {slug:'newsletters',name:'Newsletters',category:'business-essentials',icon:'newspaper',blurb:'Keep customers and members up to date in print.',image:'assets/newsletters.png'},
 {slug:'postcards',name:'Postcards',category:'business-essentials',icon:'stamp',blurb:'Postcards for promotions, reminders and thank-yous.',image:'assets/postcards.jpg'},
 {slug:'door-hangers',name:'Door Hangers',category:'business-essentials',icon:'door-open',blurb:'Die-cut door hangers for neighborhood marketing.',price:'$180',priceQty:'250',image:'assets/door.png'},
 {slug:'custom-labels',name:'Custom Labels',category:'labels-stickers',icon:'tag',blurb:'Labels in any size for products and branding.',image:'assets/customLabels.png'},
 {slug:'packaging-labels',name:'Packaging Labels',category:'labels-stickers',icon:'package',blurb:'Labels for boxes, bags, jars and bottles.',image:'assets/packaginglabel.jpg'},
 {slug:'mailing-labels',name:'Mailing Labels',category:'labels-stickers',icon:'mailbox',blurb:'Address and shipping labels for your mail.',image:'assets/mailinglabels.jpg'},
 {slug:'any-shape-stickers',name:'Any Shape Stickers',category:'labels-stickers',icon:'sticker',blurb:'Die-cut vinyl stickers, indoor or outdoor.',image:'assets/stickers.png'},
 {slug:'vehicle-decals',name:'Vehicle Decals',category:'labels-stickers',icon:'car',blurb:'Durable vinyl decals for cars, trucks and fleets.',image:'assets/decal.jpg'},
 {slug:'banners',name:'Banners',category:'banners-signs',icon:'flag',blurb:'13oz vinyl banners, hemmed with grommets.',image:'assets/banners.jpeg'},
 {slug:'signs',name:'Signs',category:'banners-signs',icon:'signpost',blurb:'Indoor and outdoor signs for any business.',image:'assets/signs2.png'},
 {slug:'metal-signs',name:'Metal Signs',category:'banners-signs',icon:'square',blurb:'Long-lasting aluminum signs that stand up to weather.',image:'assets/metalsign.jpg'},
 {slug:'yard-signs',name:'Yard Signs',category:'banners-signs',icon:'signpost',blurb:'Coroplast yard signs with H-stakes.',price:'$5.50',priceQty:'1–100',image:'assets/yardSigns.png'},
 {slug:'car-magnets',name:'Car Magnets',category:'banners-signs',icon:'magnet',blurb:'Removable magnetic signs for your vehicle.',image:'assets/carmagnet.png'},
 {slug:'custom-shirts',name:'Custom Shirts',category:'t-shirts',icon:'shirt',blurb:'Custom printed T-shirts for teams, events and businesses.',image:'assets/customtshirts.jpg'},
 {slug:'polo-shirts',name:'Polo Shirts',category:'t-shirts',icon:'shirt',blurb:'Branded polo shirts for a professional look.',image:'assets/polo.jpg'},
 {slug:'embroidery',name:'Embroidery',category:'t-shirts',icon:'scissors',blurb:'Embroidered logos on shirts, caps and more.',image:'assets/embroidery.jpg'}
];
const RC_FEATURED=['business-cards','flyers','any-shape-stickers','banners','yard-signs','custom-shirts'];
const rcProduct=slug=>RC_PRODUCTS.find(p=>p.slug===slug)||RC_PRODUCTS[0];
const rcProductsIn=cat=>RC_PRODUCTS.filter(p=>p.category===cat);
const RC_SOCIAL={
 facebook:'https://www.facebook.com/profile.php?id=100078448223258',
 instagram:'https://www.instagram.com/rcgraphic.design/?hl=en'
};
const RC_VIDEOS=[
 'https://www.facebook.com/reel/923218533211314',
 'https://www.facebook.com/reel/926812362859274',
 'https://www.facebook.com/reel/360768460083761'
];
Object.assign(window,{RC_CATEGORIES,RC_PRODUCTS,RC_FEATURED,RC_SOCIAL,RC_VIDEOS,rcProduct,rcProductsIn});
