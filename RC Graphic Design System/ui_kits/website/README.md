# UI kit — RC Graphic Design website

A click-through recreation of the RC marketing + ordering site, built entirely from this design system's
primitives (`window.RCGraphicDesignSystem_084885`). Open `index.html`.

## Screens
| File | Screen | Notes |
|---|---|---|
| `Home.jsx` | Home | Charcoal hero with brand rule, six-product grid, four-step process, design-services band, testimonial |
| `CatalogPage.jsx` | All products | Search + sort, category tabs, filter tags, custom-work band |
| `ProductPage.jsx` | Product configurator | Numbered spec steps (stock → size → quantity → turnaround), price ladder, sticky price bar, spec/file-setup/turnaround/review tabs |
| `CartPage.jsx` | Cart & checkout | Line items with artwork status, delivery form, sticky order summary |
| `ContactPage.jsx` | Quote request | Quote form with inline success state, shop details, turnaround table |
| `Chrome.jsx` | Shared | Promo bar, sticky header, footer, section heading |
| `data.js` | Fixtures | Products, stocks, sizes, price breaks, turnaround options |

## Interactions that work
Nav between all five screens · configure stock/size/quantity/turnaround with live total · add to cart (toast) ·
remove line items · empty-cart state · submit the quote form (inline success) · catalog category filtering · product tabs.

## Not real
No auth, payment, upload or persistence. Product photography, the hero image and the shop map are
labelled placeholders — RC supplied no photography.
