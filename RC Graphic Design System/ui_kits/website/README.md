# UI kit — RC Graphic Design website

A click-through recreation of the RC informational marketing site, built entirely from this design system's
primitives (`window.RCGraphicDesignSystem_084885`). Open `index.html`.

## Screens
| File | Screen | Notes |
|---|---|---|
| `Home.jsx` | Home | Charcoal hero with brand rule, six-product grid, four-step process, design-services band, testimonial |
| `CatalogPage.jsx` | All products | Search + sort, category tabs, filter tags, custom-work band |
| `ProductPage.jsx` | Product info | Available stocks/sizes, starting-price ladder, turnaround, "Ready to order? Contact us" card, spec/file-setup/turnaround/review tabs |
| `ContactPage.jsx` | Contact | Call / email / visit cards, what-to-have-ready checklist, turnaround table |
| `Chrome.jsx` | Shared | Promo bar, sticky header, footer, section heading |
| `data.js` | Fixtures | Products, stocks, sizes, price breaks, turnaround options |

## Interactions that work
Nav between all four screens · tap-to-call and mailto links · catalog category filtering · product tabs.
The site is informational only: there is no online ordering, cart or quote form. Visitors are sent to call, email or visit.

## Not real
No auth, upload or persistence. Product photography, the hero image and the shop map are
labelled placeholders — RC supplied no photography.
