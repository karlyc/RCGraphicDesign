Monochrome Lucide glyph for any UI affordance; RC uses Lucide (2px stroke) everywhere and never emoji.

```jsx
<Icon name="truck" size={20} />
<Icon name="shopping-cart" size={24} color="var(--pine-500)" />
```

Loads from the lucide-static CDN and paints with a CSS mask, so `color`/`currentColor` works. Common slugs: truck, package, printer, ruler, palette, badge-check, phone, mail, chevron-right, search, shopping-cart, upload, star.
