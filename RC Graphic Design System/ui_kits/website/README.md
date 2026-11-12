# UI kit — RC Graphic Design website

A click-through recreation of the RC informational marketing site, built entirely from this design system's
primitives (`window.RCGraphicDesignSystem_084885`). Open `index.html`.

## Screens
| File | Screen | Notes |
|---|---|---|
| `Home.jsx` | Home | Charcoal hero with brand rule, 6 featured products + "See all products", four-step process, design-services band, testimonial |
| `CatalogPage.jsx` | All products | Four sections (Business Essentials, Labels & Stickers, Banners & Signs, T-Shirts), every product as a card, custom-work band |
| `ProductPage.jsx` | Product page | One generic page per product: photo (or icon), starting price or "Call for pricing", "Ready to order? Contact us" card |
| `ContactPage.jsx` | Contact | Call / email / visit cards, what-to-have-ready checklist, turnaround table |
| `Chrome.jsx` | Shared | Promo bar, header with green nav and 4-column products menu, footer, section heading, product card |
| `data.js` | Data | Product categories, products (with starting prices where known), home-page picks |

## Interactions that work
Nav between all screens · products menu and cards open each product's page · tap-to-call and mailto links · catalog category filtering · product tabs.
The site is informational only: there is no online ordering, cart or quote form. Visitors are sent to call, email or visit.

## Not real
No auth, upload or persistence. Product photography, the hero image and the shop map are
labelled placeholders — RC supplied no photography.
