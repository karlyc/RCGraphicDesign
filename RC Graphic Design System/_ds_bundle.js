/* @ds-bundle: {"format":4,"namespace":"RCGraphicDesignSystem_084885","components":[{"name":"PriceTable","sourcePath":"components/commerce/PriceTable.jsx"},{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"ReviewStars","sourcePath":"components/commerce/ReviewStars.jsx"},{"name":"SpecList","sourcePath":"components/commerce/SpecList.jsx"},{"name":"TurnaroundOption","sourcePath":"components/commerce/TurnaroundOption.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Callout","sourcePath":"components/feedback/Callout.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"FormField","sourcePath":"components/forms/FormField.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"OptionTile","sourcePath":"components/forms/OptionTile.jsx"},{"name":"QuantityStepper","sourcePath":"components/forms/QuantityStepper.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Stepper","sourcePath":"components/navigation/Stepper.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/commerce/PriceTable.jsx":"c9aac28a2be5","components/commerce/ProductCard.jsx":"6a6e27bdfbf9","components/commerce/ReviewStars.jsx":"75f4067c04ee","components/commerce/SpecList.jsx":"b37fc83d95b6","components/commerce/TurnaroundOption.jsx":"a0729a0dfa4b","components/core/Badge.jsx":"b334d0e562b7","components/core/Button.jsx":"c91c7117b8df","components/core/Card.jsx":"6da571c9d138","components/core/Icon.jsx":"04752c702b88","components/core/IconButton.jsx":"474c7af1a8dd","components/core/Logo.jsx":"a57f455a39b8","components/core/Tag.jsx":"26d1cdcd8eb4","components/feedback/Callout.jsx":"1d8088b9c8f9","components/feedback/Dialog.jsx":"5fca85e11f81","components/feedback/Toast.jsx":"842fed895167","components/feedback/Tooltip.jsx":"673e2cec5c03","components/forms/Checkbox.jsx":"3c71972e8c20","components/forms/FormField.jsx":"98042fd8b548","components/forms/Input.jsx":"16e5a0975be0","components/forms/OptionTile.jsx":"3ce550704f90","components/forms/QuantityStepper.jsx":"42fa56fdfa21","components/forms/Radio.jsx":"f192fb2790b0","components/forms/Select.jsx":"3d7a897475a9","components/forms/Switch.jsx":"1776014a87bd","components/forms/Textarea.jsx":"79290daf55ad","components/navigation/Breadcrumb.jsx":"be4ce0ff2b0a","components/navigation/Stepper.jsx":"bf8b0474ce21","components/navigation/Tabs.jsx":"ce3689288d9e","ui_kits/website/CartPage.jsx":"824ae3f641b2","ui_kits/website/CatalogPage.jsx":"a0d5868c05e3","ui_kits/website/Chrome.jsx":"94f5baee425d","ui_kits/website/ContactPage.jsx":"5c8141136603","ui_kits/website/Home.jsx":"4c99d37b3ce6","ui_kits/website/ProductPage.jsx":"fa4d0c35b16a","ui_kits/website/data.js":"139935003ca5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RCGraphicDesignSystem_084885 = window.RCGraphicDesignSystem_084885 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/commerce/PriceTable.jsx
try { (() => {
function PriceTable({
  rows = [],
  selected,
  onSelect,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden',
      background: 'var(--white)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      padding: 'var(--space-2) var(--space-4)',
      background: 'var(--ink-800)',
      color: 'var(--ink-300)',
      font: 'var(--weight-bold) var(--text-3xs)/1.6 var(--font-condensed)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Quantity"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, "Each"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, "Total")), rows.map(r => {
    const on = r.qty === selected;
    return /*#__PURE__*/React.createElement("div", {
      key: r.qty,
      onClick: () => onSelect && onSelect(r.qty),
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        alignItems: 'center',
        padding: 'var(--space-3) var(--space-4)',
        borderTop: '1px solid var(--border-subtle)',
        background: on ? 'var(--surface-tint)' : 'transparent',
        cursor: onSelect ? 'pointer' : 'default',
        transition: 'background-color var(--dur-fast) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--weight-semibold) var(--text-sm)/1 var(--font-sans)',
        color: 'var(--text-strong)'
      }
    }, r.qty.toLocaleString(), r.note && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 8,
        font: 'var(--weight-bold) var(--text-3xs)/1 var(--font-condensed)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: 'var(--pine-600)'
      }
    }, r.note)), /*#__PURE__*/React.createElement("span", {
      style: {
        textAlign: 'right',
        font: 'var(--type-body-sm)',
        color: 'var(--text-muted)'
      }
    }, r.each), /*#__PURE__*/React.createElement("span", {
      style: {
        textAlign: 'right',
        font: 'var(--weight-bold) var(--text-sm)/1 var(--font-sans)',
        color: 'var(--text-strong)'
      }
    }, r.total));
  }));
}
Object.assign(__ds_scope, { PriceTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/PriceTable.jsx", error: String((e && e.message) || e) }); }

// components/commerce/SpecList.jsx
try { (() => {
function SpecList({
  items = [],
  style
}) {
  return /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: 0,
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      columnGap: 'var(--space-6)',
      rowGap: 'var(--space-2)',
      ...style
    }
  }, items.map(it => /*#__PURE__*/React.createElement(React.Fragment, {
    key: it.label
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      font: 'var(--weight-bold) var(--text-2xs)/1.5 var(--font-condensed)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, it.label), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      font: 'var(--type-body-sm)',
      color: 'var(--text-strong)'
    }
  }, it.value))));
}
Object.assign(__ds_scope, { SpecList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/SpecList.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  tone = 'default',
  pad = 'var(--space-6)',
  sheet,
  interactive,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const bg = tone === 'dark' ? 'var(--surface-dark)' : tone === 'sunken' ? 'var(--surface-sunken)' : tone === 'tint' ? 'var(--surface-tint)' : 'var(--surface-card)';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: bg,
      color: tone === 'dark' ? 'var(--text-inverse)' : 'var(--text-body)',
      border: tone === 'dark' ? '1px solid transparent' : '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-sm)',
      padding: pad,
      boxShadow: sheet ? 'var(--shadow-sheet)' : interactive && hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: interactive && hover ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-out),transform var(--dur-base) var(--ease-out)',
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = 'https://unpkg.com/lucide-static@0.469.0/icons/';
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth,
  style,
  ...rest
}) {
  const url = `${BASE}${name}.svg`;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true"
  }, rest, {
    style: {
      display: 'inline-block',
      flex: 'none',
      width: size,
      height: size,
      background: color,
      WebkitMaskImage: `url(${url})`,
      maskImage: `url(${url})`,
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ReviewStars.jsx
try { (() => {
function ReviewStars({
  value = 5,
  count,
  size = 14,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 2
    }
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    key: i,
    name: value >= i + 1 ? 'star' : 'star-off',
    size: size,
    color: value >= i + 1 ? 'var(--yellow-500)' : 'var(--ink-300)'
  }))), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, value.toFixed(1), " (", count.toLocaleString(), ")"));
}
Object.assign(__ds_scope, { ReviewStars });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ReviewStars.jsx", error: String((e && e.message) || e) }); }

// components/commerce/TurnaroundOption.jsx
try { (() => {
function TurnaroundOption({
  name,
  shipsBy,
  price,
  selected,
  recommended,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 4,
      textAlign: 'left',
      padding: 'var(--space-4)',
      background: selected ? 'var(--surface-tint)' : 'var(--white)',
      border: `1px solid ${selected ? 'var(--border-selected)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-sm)',
      boxShadow: selected ? 'var(--ring-selected)' : 'none',
      cursor: 'pointer',
      transition: 'var(--transition-control)',
      position: 'relative',
      ...style
    }
  }, recommended && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -9,
      left: 'var(--space-4)',
      padding: '2px 6px',
      background: 'var(--ink-800)',
      color: 'var(--white)',
      borderRadius: 'var(--radius-xs)',
      font: 'var(--weight-bold) var(--text-3xs)/1.4 var(--font-condensed)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase'
    }
  }, "Most ordered"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "truck",
    size: 16,
    color: selected ? 'var(--pine-600)' : 'var(--ink-500)'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-bold) var(--text-sm)/1 var(--font-condensed)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-strong)'
    }
  }, name)), shipsBy && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, shipsBy), price && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-bold) var(--text-md)/1 var(--font-sans)',
      color: 'var(--text-strong)',
      marginTop: 2
    }
  }, price));
}
Object.assign(__ds_scope, { TurnaroundOption });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/TurnaroundOption.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: ['var(--ink-100)', 'var(--ink-700)'],
  rush: ['var(--status-rush-bg)', 'var(--status-rush-fg)'],
  success: ['var(--status-success-bg)', 'var(--status-success-fg)'],
  warning: ['var(--status-warning-bg)', 'var(--status-warning-fg)'],
  error: ['var(--status-error-bg)', 'var(--status-error-fg)'],
  info: ['var(--status-info-bg)', 'var(--status-info-fg)'],
  dark: ['var(--ink-800)', 'var(--white)']
};
function Badge({
  children,
  tone = 'neutral',
  icon,
  solid,
  style,
  ...rest
}) {
  const [bg, fg] = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-1)',
      padding: '3px var(--space-2)',
      background: solid ? fg : bg,
      color: solid ? 'var(--white)' : fg,
      borderRadius: 'var(--radius-xs)',
      font: 'var(--weight-bold) var(--text-3xs)/1.4 var(--font-condensed)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      ...style
    }
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 12
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
function ProductCard({
  name,
  blurb,
  startingAt,
  turnaround,
  image,
  icon = 'printer',
  badge,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onClick && onClick();
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      textDecoration: 'none',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-out),transform var(--dur-base) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 3',
      background: 'var(--ink-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      color: 'var(--ink-400)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 30
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-bold) var(--text-3xs)/1 var(--font-condensed)',
      letterSpacing: 'var(--tracking-caps-loose)',
      textTransform: 'uppercase'
    }
  }, "Product photo")), badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 'var(--space-3)',
      left: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "rush",
    solid: true
  }, badge))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      padding: 'var(--space-4)',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-semibold) var(--text-md)/1.25 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, name), blurb && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      flex: 1
    }
  }, blurb), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-2)',
      paddingTop: 'var(--space-3)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, startingAt && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, "From ", /*#__PURE__*/React.createElement("b", {
    style: {
      font: 'var(--weight-bold) var(--text-md)/1 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, startingAt)), turnaround && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      font: 'var(--weight-bold) var(--text-3xs)/1 var(--font-condensed)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--pine-600)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "clock",
    size: 12
  }), turnaround))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    h: 'var(--control-h-sm)',
    px: 'var(--space-3)',
    fs: 'var(--text-xs)',
    icon: 14
  },
  md: {
    h: 'var(--control-h-md)',
    px: 'var(--space-5)',
    fs: 'var(--text-sm)',
    icon: 16
  },
  lg: {
    h: 'var(--control-h-lg)',
    px: 'var(--space-6)',
    fs: 'var(--text-base)',
    icon: 18
  }
};
const VARIANTS = {
  primary: {
    bg: 'var(--action-primary)',
    fg: 'var(--white)',
    bd: 'transparent',
    hoverBg: 'var(--action-primary-hover)'
  },
  secondary: {
    bg: 'var(--action-secondary)',
    fg: 'var(--white)',
    bd: 'transparent',
    hoverBg: 'var(--action-secondary-hover)'
  },
  outline: {
    bg: 'transparent',
    fg: 'var(--ink-800)',
    bd: 'var(--border-default)',
    hoverBg: 'var(--ink-100)'
  },
  ghost: {
    bg: 'transparent',
    fg: 'var(--ink-700)',
    bd: 'transparent',
    hoverBg: 'var(--ink-100)'
  },
  onDark: {
    bg: 'var(--white)',
    fg: 'var(--ink-900)',
    bd: 'transparent',
    hoverBg: 'var(--ink-200)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconAfter,
  disabled,
  fullWidth,
  as = 'button',
  href,
  onClick,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md,
    v = VARIANTS[variant] || VARIANTS.primary;
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      height: s.h,
      padding: `0 ${s.px}`,
      width: fullWidth ? '100%' : undefined,
      font: `var(--weight-semibold) ${s.fs}/1 var(--font-sans)`,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      background: disabled ? 'var(--action-disabled)' : hover ? v.hoverBg : v.bg,
      color: disabled ? 'var(--action-disabled-text)' : v.fg,
      border: `1px solid ${disabled ? 'transparent' : v.bd}`,
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'var(--transition-control)',
      transform: hover && !disabled ? 'translateY(-1px)' : 'none',
      ...style
    }
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }), children, iconAfter && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconAfter,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SZ = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  badge,
  disabled,
  onClick,
  style,
  ...rest
}) {
  const d = SZ[size] || 40,
    [hover, setHover] = React.useState(false);
  const fill = variant === 'solid' ? 'var(--action-secondary)' : variant === 'primary' ? 'var(--action-primary)' : 'transparent';
  const fg = variant === 'ghost' ? 'var(--ink-700)' : 'var(--white)';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      position: 'relative',
      width: d,
      height: d,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: hover && variant === 'ghost' ? 'var(--ink-100)' : fill,
      color: disabled ? 'var(--action-disabled-text)' : fg,
      border: variant === 'outline' ? '1px solid var(--border-default)' : '1px solid transparent',
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: hover && variant !== 'ghost' ? 0.88 : 1,
      transition: 'var(--transition-control)',
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 16 : 20
  }), badge != null && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      right: 2,
      minWidth: 16,
      height: 16,
      padding: '0 4px',
      background: 'var(--pine-500)',
      color: 'var(--white)',
      borderRadius: 'var(--radius-pill)',
      font: 'var(--weight-bold) var(--text-3xs)/16px var(--font-sans)',
      textAlign: 'center'
    }
  }, badge));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function Logo({
  variant = 'lockup',
  height = 48,
  src = '../../assets/logo-rc-lockup-dark.png',
  style
}) {
  if (variant === 'lockup') return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "RC Graphic Designs & Printing",
    style: {
      height,
      width: 'auto',
      borderRadius: 'var(--radius-xs)',
      ...style
    }
  });
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      lineHeight: 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: height * 0.62,
      color: variant === 'onDark' ? 'var(--silver)' : 'var(--ink-800)',
      letterSpacing: '-0.01em'
    }
  }, "RC"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 700,
      fontSize: height * 0.19,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: variant === 'onDark' ? 'var(--ink-300)' : 'var(--ink-600)',
      marginTop: height * 0.08
    }
  }, "Graphic Designs & Printing"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  onRemove,
  selected,
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      height: 28,
      padding: '0 var(--space-3)',
      background: selected ? 'var(--surface-selected)' : 'var(--white)',
      color: selected ? 'var(--pine-700)' : 'var(--ink-700)',
      border: `1px solid ${selected ? 'var(--border-selected)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-pill)',
      font: 'var(--type-label)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'var(--transition-control)',
      ...style
    }
  }), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      display: 'flex',
      border: 0,
      background: 'none',
      padding: 0,
      cursor: 'pointer',
      color: 'inherit'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 12
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Callout.jsx
try { (() => {
const T = {
  info: ['var(--status-info-bg)', 'var(--status-info-fg)', 'info'],
  success: ['var(--status-success-bg)', 'var(--status-success-fg)', 'badge-check'],
  warning: ['var(--status-warning-bg)', 'var(--status-warning-fg)', 'triangle-alert'],
  error: ['var(--status-error-bg)', 'var(--status-error-fg)', 'circle-x'],
  rush: ['var(--status-rush-bg)', 'var(--status-rush-fg)', 'zap']
};
function Callout({
  tone = 'info',
  title,
  children,
  icon,
  style
}) {
  const [bg, fg, def] = T[tone] || T.info;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      padding: 'var(--space-4)',
      background: bg,
      borderRadius: 'var(--radius-sm)',
      border: '1px solid rgba(19,19,22,.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || def,
    size: 18,
    color: fg,
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-semibold) var(--text-sm)/1.3 var(--font-sans)',
      color: 'var(--text-strong)',
      marginBottom: children ? 4 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--ink-700)'
    }
  }, children)));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Callout.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  eyebrow,
  children,
  footer,
  onClose,
  width = 520,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--overlay-scrim)',
      backdropFilter: 'var(--blur-panel)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-6)',
      zIndex: 60
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: '100%',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-xl)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-4)',
      padding: 'var(--space-6) var(--space-6) var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--pine-600)',
      marginBottom: 6
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-h2)',
      fontSize: 'var(--text-xl)'
    }
  }, title)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      border: 0,
      background: 'none',
      cursor: 'pointer',
      color: 'var(--ink-500)',
      display: 'flex',
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-6) var(--space-6)',
      font: 'var(--type-body)',
      fontSize: 'var(--text-sm)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)',
      padding: 'var(--space-4) var(--space-6)',
      background: 'var(--ink-50)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  tone = 'success',
  title,
  message,
  onDismiss,
  style
}) {
  const fg = tone === 'error' ? 'var(--status-error-fg)' : tone === 'warning' ? 'var(--status-warning-fg)' : 'var(--green-600)';
  const glyph = tone === 'error' ? 'circle-x' : tone === 'warning' ? 'triangle-alert' : 'circle-check';
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-start',
      minWidth: 300,
      maxWidth: 420,
      padding: 'var(--space-4)',
      background: 'var(--ink-900)',
      color: 'var(--white)',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-xl)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: glyph,
    size: 18,
    color: fg,
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-semibold) var(--text-sm)/1.3 var(--font-sans)'
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-xs)',
      color: 'var(--ink-300)',
      marginTop: 2
    }
  }, message)), onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onDismiss,
    style: {
      border: 0,
      background: 'none',
      padding: 0,
      cursor: 'pointer',
      color: 'var(--ink-400)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  placement = 'top',
  children,
  style
}) {
  const [show, setShow] = React.useState(false);
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 8px)'
  } : {
    bottom: 'calc(100% + 8px)'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      ...pos,
      whiteSpace: 'nowrap',
      padding: '6px var(--space-3)',
      background: 'var(--ink-900)',
      color: 'var(--white)',
      borderRadius: 'var(--radius-xs)',
      font: 'var(--type-label)',
      fontWeight: 500,
      boxShadow: 'var(--shadow-lg)',
      zIndex: 40
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  description,
  checked,
  onChange,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 18,
      height: 18,
      marginTop: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: checked ? 'var(--action-primary)' : 'var(--white)',
      border: `1px solid ${checked ? 'var(--action-primary)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-xs)',
      transition: 'var(--transition-control)'
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13,
    color: "var(--white)"
  })), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-body-sm)',
      color: 'var(--text-strong)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormField.jsx
try { (() => {
function FormField({
  label,
  hint,
  error,
  required,
  htmlFor,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      font: 'var(--weight-bold) var(--text-2xs)/1.2 var(--font-condensed)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--ink-600)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pine-500)',
      marginLeft: 3
    }
  }, "*")), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--status-error-fg)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { FormField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  icon,
  suffix,
  invalid,
  size = 'md',
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'sm' ? 'var(--control-h-sm)' : size === 'lg' ? 'var(--control-h-lg)' : 'var(--control-h-md)';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      height: h,
      padding: '0 var(--space-3)',
      background: 'var(--white)',
      border: `1px solid ${invalid ? 'var(--status-error-fg)' : focus ? 'var(--border-focus)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-sm)',
      boxShadow: focus ? 'var(--ring-focus)' : 'none',
      transition: 'var(--transition-control)',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16,
    color: "var(--ink-400)"
  }), /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 'none',
      background: 'none',
      font: 'var(--type-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-strong)'
    }
  })), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-muted)'
    }
  }, suffix));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/OptionTile.jsx
try { (() => {
function OptionTile({
  title,
  meta,
  priceNote,
  icon,
  swatch,
  selected,
  onClick,
  disabled,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      textAlign: 'left',
      width: '100%',
      padding: 'var(--space-3) var(--space-4)',
      background: selected ? 'var(--surface-tint)' : 'var(--white)',
      border: `1px solid ${selected ? 'var(--border-selected)' : hover ? 'var(--border-default)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-sm)',
      boxShadow: selected ? 'var(--ring-selected)' : 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'var(--transition-control)',
      ...style
    }
  }, swatch && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 26,
      height: 26,
      borderRadius: 'var(--radius-xs)',
      background: swatch,
      border: '1px solid rgba(19,19,22,.12)'
    }
  }), icon && !swatch && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    color: selected ? 'var(--pine-600)' : 'var(--ink-500)'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--weight-semibold) var(--text-sm)/1.3 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, title), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, meta)), priceNote && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-semibold) var(--text-xs)/1 var(--font-sans)',
      color: selected ? 'var(--pine-600)' : 'var(--ink-600)'
    }
  }, priceNote));
}
Object.assign(__ds_scope, { OptionTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/OptionTile.jsx", error: String((e && e.message) || e) }); }

// components/forms/QuantityStepper.jsx
try { (() => {
function QuantityStepper({
  value = 0,
  step = 50,
  min = 0,
  max = 100000,
  onChange,
  style
}) {
  const btn = dir => () => onChange && onChange(Math.min(max, Math.max(min, value + dir * step)));
  const b = {
    width: 34,
    height: 'var(--control-h-md)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--ink-50)',
    border: 0,
    cursor: 'pointer',
    color: 'var(--ink-700)'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden',
      background: 'var(--white)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Decrease",
    onClick: btn(-1),
    style: b
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus",
    size: 14
  })), /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: e => onChange && onChange(Number(e.target.value.replace(/\D/g, '')) || 0),
    style: {
      width: 72,
      height: 'var(--control-h-md)',
      border: 0,
      borderLeft: '1px solid var(--border-subtle)',
      borderRight: '1px solid var(--border-subtle)',
      outline: 'none',
      textAlign: 'center',
      font: 'var(--weight-semibold) var(--text-sm)/1 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Increase",
    onClick: btn(1),
    style: b
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "plus",
    size: 14
  })));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  description,
  checked,
  onChange,
  name,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 18,
      height: 18,
      marginTop: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--white)',
      border: `1px solid ${checked ? 'var(--action-primary)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-pill)',
      transition: 'var(--transition-control)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--action-primary)'
    }
  })), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    checked: !!checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-body-sm)',
      color: 'var(--text-strong)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  size = 'md',
  invalid,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'sm' ? 'var(--control-h-sm)' : size === 'lg' ? 'var(--control-h-lg)' : 'var(--control-h-md)';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      width: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", _extends({}, rest, {
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      width: '100%',
      height: h,
      padding: '0 var(--space-8) 0 var(--space-3)',
      background: 'var(--white)',
      border: `1px solid ${invalid ? 'var(--status-error-fg)' : focus ? 'var(--border-focus)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-sm)',
      boxShadow: focus ? 'var(--ring-focus)' : 'none',
      outline: 'none',
      font: 'var(--type-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-strong)',
      cursor: 'pointer'
    }
  }), options.map(o => {
    const v = typeof o === 'string' ? o : o.value,
      l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    color: "var(--ink-500)",
    style: {
      position: 'absolute',
      right: 'var(--space-3)',
      pointerEvents: 'none'
    }
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  label,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 38,
      height: 22,
      padding: 2,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--action-primary)' : 'var(--ink-300)',
      transition: 'background-color var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-sm)',
      transform: checked ? 'translateX(16px)' : 'none',
      transition: 'transform var(--dur-fast) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-strong)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  invalid,
  rows = 4,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows
  }, rest, {
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      padding: 'var(--space-3)',
      background: 'var(--white)',
      resize: 'vertical',
      border: `1px solid ${invalid ? 'var(--status-error-fg)' : focus ? 'var(--border-focus)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-sm)',
      boxShadow: focus ? 'var(--ring-focus)' : 'none',
      outline: 'none',
      font: 'var(--type-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-strong)',
      transition: 'var(--transition-control)',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function Breadcrumb({
  items = [],
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      flexWrap: 'wrap',
      ...style
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1,
      label = typeof it === 'string' ? it : it.label;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: label
    }, i > 0 && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 13,
      color: "var(--ink-400)"
    }), last ? /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-body-sm)',
        fontSize: 'var(--text-xs)',
        color: 'var(--text-muted)'
      }
    }, label) : /*#__PURE__*/React.createElement("a", {
      href: typeof it === 'object' && it.href || '#',
      style: {
        font: 'var(--type-body-sm)',
        fontSize: 'var(--text-xs)',
        color: 'var(--ink-600)'
      }
    }, label));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Stepper.jsx
try { (() => {
function Stepper({
  steps = [],
  current = 0,
  style
}) {
  return /*#__PURE__*/React.createElement("ol", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      ...style
    }
  }, steps.map((s, i) => {
    const done = i < current,
      active = i === current;
    return /*#__PURE__*/React.createElement("li", {
      key: s,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-2)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 22,
        height: 22,
        flex: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 'var(--radius-pill)',
        background: done ? 'var(--pine-500)' : active ? 'var(--ink-800)' : 'var(--ink-200)',
        color: done || active ? 'var(--white)' : 'var(--ink-500)',
        font: 'var(--weight-bold) var(--text-3xs)/1 var(--font-sans)'
      }
    }, done ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check",
      size: 12
    }) : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--weight-bold) var(--text-2xs)/1 var(--font-condensed)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: active ? 'var(--text-strong)' : 'var(--text-muted)'
      }
    }, s)), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 28,
        height: 1,
        background: 'var(--border-default)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, items.map(it => {
    const v = typeof it === 'string' ? it : it.value,
      l = typeof it === 'string' ? it : it.label,
      active = v === value;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(v),
      style: {
        padding: '0 0 var(--space-3)',
        background: 'none',
        border: 0,
        borderBottom: `2px solid ${active ? 'var(--pine-500)' : 'transparent'}`,
        marginBottom: -1,
        cursor: 'pointer',
        font: 'var(--weight-bold) var(--text-sm)/1 var(--font-condensed)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: active ? 'var(--text-strong)' : 'var(--text-muted)',
        transition: 'var(--transition-control)'
      }
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CartPage.jsx
try { (() => {
(() => {
  const {
    Button,
    Icon,
    Card,
    Stepper,
    SpecList,
    Callout,
    Input,
    Select,
    Checkbox,
    FormField,
    Badge,
    Toast
  } = window.RCGraphicDesignSystem_084885;
  function CartPage({
    go,
    items,
    onRemove
  }) {
    const sub = items.reduce((s, i) => s + Number(i.total), 0);
    const ship = items.length ? 12 : 0,
      tax = sub * 0.0725;
    return /*#__PURE__*/React.createElement("main", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: 'var(--space-7) var(--space-6) 0'
      }
    }, /*#__PURE__*/React.createElement(Stepper, {
      steps: ['Specs', 'Artwork', 'Proof', 'Checkout'],
      current: 3
    }), /*#__PURE__*/React.createElement("h1", {
      style: {
        font: 'var(--type-h1)',
        marginTop: 'var(--space-6)'
      }
    }, "Your cart"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr',
        gap: 'var(--space-8)',
        marginTop: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-5)'
      }
    }, items.length === 0 && /*#__PURE__*/React.createElement(Card, {
      pad: "var(--space-8)",
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shopping-cart",
      size: 28,
      color: "var(--ink-400)",
      style: {
        margin: '0 auto'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-h3)',
        marginTop: 'var(--space-4)'
      }
    }, "Nothing in the cart yet"), /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--type-body-sm)',
        color: 'var(--text-muted)',
        marginTop: 6
      }
    }, "Configure a product to see it here."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: () => go('product')
    }, "Browse products"))), items.map((it, i) => /*#__PURE__*/React.createElement(Card, {
      key: i,
      pad: "var(--space-5)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 96,
        height: 72,
        flex: 'none',
        background: 'var(--ink-100)',
        borderRadius: 'var(--radius-sm)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--ink-400)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "credit-card",
      size: 22
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-h3)'
      }
    }, "Business cards"), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--weight-bold) var(--text-md)/1 var(--font-sans)',
        color: 'var(--text-strong)'
      }
    }, "$", it.total)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-3)'
      }
    }, /*#__PURE__*/React.createElement(SpecList, {
      items: [{
        label: 'Quantity',
        value: it.qty.toLocaleString()
      }, {
        label: 'Stock',
        value: it.stock
      }, {
        label: 'Turnaround',
        value: it.turn
      }]
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-4)',
        marginTop: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "warning",
      icon: "upload"
    }, "Artwork pending"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      icon: "upload"
    }, "Add file"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      onClick: () => onRemove(i)
    }, "Remove")))))), items.length > 0 && /*#__PURE__*/React.createElement(Callout, {
      tone: "rush",
      title: "Approve your proof by 4 PM to keep next-day printing"
    }, "We email a digital proof within two hours of receiving artwork."), /*#__PURE__*/React.createElement(Card, {
      pad: "var(--space-6)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--weight-bold) var(--text-sm)/1 var(--font-condensed)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        marginBottom: 'var(--space-5)'
      }
    }, "Delivery"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement(FormField, {
      label: "Full name",
      htmlFor: "n1"
    }, /*#__PURE__*/React.createElement(Input, {
      id: "n1",
      defaultValue: "Dana Whitlock"
    })), /*#__PURE__*/React.createElement(FormField, {
      label: "Company",
      htmlFor: "n2"
    }, /*#__PURE__*/React.createElement(Input, {
      id: "n2",
      defaultValue: "Riverbend Landscaping"
    })), /*#__PURE__*/React.createElement(FormField, {
      label: "Address",
      htmlFor: "n3",
      style: {
        gridColumn: 'span 2'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      id: "n3",
      defaultValue: "418 Mill Creek Rd"
    })), /*#__PURE__*/React.createElement(FormField, {
      label: "City",
      htmlFor: "n4"
    }, /*#__PURE__*/React.createElement(Input, {
      id: "n4",
      defaultValue: "Charlotte"
    })), /*#__PURE__*/React.createElement(FormField, {
      label: "State",
      htmlFor: "n5"
    }, /*#__PURE__*/React.createElement(Select, {
      id: "n5",
      options: ['NC', 'SC', 'GA', 'VA']
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-5)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)'
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      label: "Pick up at the shop instead",
      description: "Ready for pickup 8 AM \u2013 5 PM weekdays"
    }), /*#__PURE__*/React.createElement(Checkbox, {
      label: "Email me when the proof is ready",
      checked: true
    })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Card, {
      pad: "var(--space-6)",
      style: {
        position: 'sticky',
        top: 'var(--space-9)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-h3)'
      }
    }, "Order summary"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
        marginTop: 'var(--space-5)'
      }
    }, [['Subtotal', '$' + sub.toFixed(2)], ['Shipping', '$' + ship.toFixed(2)], ['Tax (7.25%)', '$' + tax.toFixed(2)]].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        font: 'var(--type-body-sm)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-muted)'
      }
    }, l), /*#__PURE__*/React.createElement("b", {
      style: {
        color: 'var(--text-strong)'
      }
    }, v)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginTop: 'var(--space-5)',
        paddingTop: 'var(--space-4)',
        borderTop: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--weight-bold) var(--text-sm)/1 var(--font-condensed)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase'
      }
    }, "Total"), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--weight-bold) var(--text-2xl)/1 var(--font-sans)',
        color: 'var(--text-strong)'
      }
    }, "$", (sub + ship + tax).toFixed(2))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-6)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      fullWidth: true,
      disabled: !items.length,
      iconAfter: "lock"
    }, "Place order"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      fullWidth: true,
      onClick: () => go('product')
    }, "Keep configuring")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-5)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)'
      }
    }, [['badge-check', 'Free digital proof'], ['printer', 'Printed in-house'], ['phone', '(704) 555-0148']].map(([i, l]) => /*#__PURE__*/React.createElement("span", {
      key: l,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        font: 'var(--type-body-sm)',
        fontSize: 'var(--text-xs)',
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: i,
      size: 14,
      color: "var(--ink-400)"
    }), l)))))));
  }
  Object.assign(window, {
    CartPage
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CartPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CatalogPage.jsx
try { (() => {
(() => {
  const {
    Button,
    Icon,
    Card,
    Tag,
    Tabs,
    ProductCard,
    Breadcrumb,
    Select,
    Input
  } = window.RCGraphicDesignSystem_084885;
  function CatalogPage({
    go
  }) {
    const [filter, setFilter] = React.useState('All');
    const cats = ['All', 'Next day', 'Signage', 'Office'];
    const map = {
      'Next day': ['business-cards', 'flyers', 'custom-stickers'],
      'Signage': ['banners', 'yard-signs'],
      'Office': ['carbonless-forms', 'business-cards']
    };
    const list = filter === 'All' ? window.RC_PRODUCTS : window.RC_PRODUCTS.filter(p => map[filter].includes(p.slug));
    return /*#__PURE__*/React.createElement("main", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: 'var(--space-6) var(--space-6) 0'
      }
    }, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: [{
        label: 'Home',
        href: '#'
      }, 'All products']
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: 'var(--space-6)',
        marginTop: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      style: {
        font: 'var(--type-h1)'
      }
    }, "All products"), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 'var(--space-3)',
        font: 'var(--type-body)',
        color: 'var(--text-muted)',
        maxWidth: '54ch'
      }
    }, "Everything we print, with starting prices for the smallest run. Need something not listed? Ask for a quote.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-3)',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      icon: "search",
      placeholder: "Search products",
      style: {
        width: 220
      }
    }), /*#__PURE__*/React.createElement(Select, {
      options: ['Most ordered', 'Price: low to high', 'Fastest turnaround'],
      style: {
        width: 200
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      items: cats,
      value: filter,
      onChange: setFilter
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-2)',
        marginTop: 'var(--space-5)'
      }
    }, ['Under $50', 'Two-sided', 'Outdoor'].map(t => /*#__PURE__*/React.createElement(Tag, {
      key: t
    }, t))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 'var(--space-5)',
        marginTop: 'var(--space-6)'
      }
    }, list.map(p => /*#__PURE__*/React.createElement(ProductCard, {
      key: p.slug,
      name: p.name,
      blurb: p.blurb,
      startingAt: p.from,
      turnaround: p.turnaround,
      icon: p.icon,
      badge: p.badge,
      onClick: () => go('product')
    }))), /*#__PURE__*/React.createElement(Card, {
      tone: "tint",
      pad: "var(--space-7)",
      style: {
        marginTop: 'var(--space-8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-h3)',
        color: 'var(--text-strong)'
      }
    }, "Something custom?"), /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--type-body-sm)',
        color: 'var(--ink-700)',
        marginTop: 4
      }
    }, "Menus, door hangers, table tents, vehicle magnets \u2014 send the details and we will price it.")), /*#__PURE__*/React.createElement(Button, {
      onClick: () => go('contact')
    }, "Request a quote")));
  }
  Object.assign(window, {
    CatalogPage
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CatalogPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
(() => {
  const {
    Button,
    IconButton,
    Icon,
    Badge,
    Logo
  } = window.RCGraphicDesignSystem_084885;
  function PromoBar() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--ink-900)',
        color: 'var(--ink-300)',
        padding: '8px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 var(--space-6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-4)',
        font: 'var(--weight-bold) var(--text-2xs)/1 var(--font-condensed)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "zap",
      size: 13,
      color: "var(--yellow-500)"
    }), "Files in by 4 PM print next day"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 13
    }), "(704) 555-0148"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 13
    }), "Local pickup available"))));
  }
  function Header({
    route,
    go,
    cartCount
  }) {
    const nav = [['home', 'Home'], ['product', 'Business cards'], ['catalog', 'All products'], ['contact', 'Contact']];
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 30,
        background: 'var(--white)',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: 'var(--space-4) var(--space-6)',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-8)'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        go('home');
      },
      style: {
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      height: 52,
      src: "../../assets/logo-rc-lockup-dark.png"
    })), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        gap: 'var(--space-6)',
        flex: 1
      }
    }, nav.map(([r, l]) => /*#__PURE__*/React.createElement("a", {
      key: r,
      href: "#",
      onClick: e => {
        e.preventDefault();
        go(r);
      },
      style: {
        font: 'var(--weight-bold) var(--text-sm)/1 var(--font-condensed)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        textDecoration: 'none',
        paddingBottom: 2,
        color: route === r ? 'var(--pine-600)' : 'var(--ink-700)',
        borderBottom: route === r ? '2px solid var(--pine-500)' : '2px solid transparent'
      }
    }, l))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-2)'
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "search",
      label: "Search"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "user",
      label: "Account"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "shopping-cart",
      label: "Cart",
      badge: cartCount || undefined,
      onClick: () => go('cart')
    }), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      icon: "upload",
      onClick: () => go('product')
    }, "Start an order"))));
  }
  function Footer({
    go
  }) {
    const cols = [['Products', ['Business cards', 'Flyers', 'Carbonless forms', 'Banners', 'Yard signs', 'Custom stickers']], ['Help', ['File setup guide', 'Templates', 'Turnaround times', 'Shipping & pickup', 'Reorder']], ['Shop', ['Request a quote', 'Design services', 'Trade & reseller pricing', 'Contact us']]];
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: 'var(--ink-900)',
        color: 'var(--ink-300)',
        marginTop: 'var(--space-12)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement("i", {
      style: {
        flex: 1,
        background: 'var(--cyan-500)'
      }
    }), /*#__PURE__*/React.createElement("i", {
      style: {
        flex: 1,
        background: 'var(--pine-500)'
      }
    }), /*#__PURE__*/React.createElement("i", {
      style: {
        flex: 1,
        background: 'var(--yellow-500)'
      }
    }), /*#__PURE__*/React.createElement("i", {
      style: {
        flex: 1,
        background: 'var(--ink-950)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: 'var(--space-10) var(--space-6)',
        display: 'grid',
        gridTemplateColumns: '1.4fr repeat(3,1fr)',
        gap: 'var(--space-9)'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
      height: 56,
      src: "../../assets/logo-rc-lockup-dark.png"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 'var(--space-4)',
        font: 'var(--type-body-sm)',
        color: 'var(--ink-400)',
        maxWidth: '32ch'
      }
    }, "Commercial printing and design out of one shop: cards, flyers, forms, banners, signs and stickers."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-4)',
        display: 'flex',
        gap: 'var(--space-3)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "onDark",
      size: "sm",
      onClick: () => go('contact')
    }, "Get a quote"))), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
      key: h
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--weight-bold) var(--text-2xs)/1 var(--font-condensed)',
        letterSpacing: 'var(--tracking-caps-loose)',
        textTransform: 'uppercase',
        color: 'var(--silver)',
        marginBottom: 'var(--space-4)'
      }
    }, h), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)'
      }
    }, items.map(i => /*#__PURE__*/React.createElement("li", {
      key: i
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault(),
      style: {
        font: 'var(--type-body-sm)',
        color: 'var(--ink-300)',
        textDecoration: 'none'
      }
    }, i))))))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--ink-800)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: 'var(--space-5) var(--space-6)',
        display: 'flex',
        justifyContent: 'space-between',
        font: 'var(--type-body-sm)',
        fontSize: 'var(--text-xs)',
        color: 'var(--ink-500)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 RC Graphic Designs & Printing"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault(),
      style: {
        color: 'var(--ink-500)'
      }
    }, "Terms"), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault(),
      style: {
        color: 'var(--ink-500)'
      }
    }, "Privacy")))));
  }
  function SectionHead({
    eyebrow,
    title,
    note
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: 'var(--space-6)',
        marginBottom: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-eyebrow)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: 'var(--pine-600)',
        marginBottom: 'var(--space-2)'
      }
    }, eyebrow), /*#__PURE__*/React.createElement("h2", {
      style: {
        font: 'var(--type-h2)'
      }
    }, title)), note && /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-body-sm)',
        color: 'var(--text-muted)'
      }
    }, note));
  }
  Object.assign(window, {
    PromoBar,
    Header,
    Footer,
    SectionHead
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactPage.jsx
try { (() => {
(() => {
  const {
    Button,
    Icon,
    Card,
    FormField,
    Input,
    Textarea,
    Select,
    Checkbox,
    Callout,
    SpecList,
    Badge
  } = window.RCGraphicDesignSystem_084885;
  function ContactPage({
    go,
    onSent
  }) {
    const [sent, setSent] = React.useState(false);
    return /*#__PURE__*/React.createElement("main", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: 'var(--space-9) var(--space-6) 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.1fr .9fr',
        gap: 'var(--space-9)'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-eyebrow)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: 'var(--pine-600)'
      }
    }, "Request a quote"), /*#__PURE__*/React.createElement("h1", {
      style: {
        font: 'var(--type-h1)',
        marginTop: 'var(--space-3)'
      }
    }, "Tell us about the job"), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 'var(--space-3)',
        font: 'var(--type-body)',
        color: 'var(--text-body)',
        maxWidth: '50ch'
      }
    }, "Quotes come back the same business day. If you already have a file, attach it and we will check it for press."), /*#__PURE__*/React.createElement(Card, {
      pad: "var(--space-6)",
      style: {
        marginTop: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement(FormField, {
      label: "Name",
      required: true,
      htmlFor: "c1"
    }, /*#__PURE__*/React.createElement(Input, {
      id: "c1",
      placeholder: "Dana Whitlock"
    })), /*#__PURE__*/React.createElement(FormField, {
      label: "Company",
      htmlFor: "c2"
    }, /*#__PURE__*/React.createElement(Input, {
      id: "c2",
      placeholder: "Riverbend Landscaping"
    })), /*#__PURE__*/React.createElement(FormField, {
      label: "Email",
      required: true,
      htmlFor: "c3"
    }, /*#__PURE__*/React.createElement(Input, {
      id: "c3",
      placeholder: "dana@riverbend.com"
    })), /*#__PURE__*/React.createElement(FormField, {
      label: "Phone",
      htmlFor: "c4"
    }, /*#__PURE__*/React.createElement(Input, {
      id: "c4",
      placeholder: "(704) 555-0148"
    })), /*#__PURE__*/React.createElement(FormField, {
      label: "Product",
      htmlFor: "c5"
    }, /*#__PURE__*/React.createElement(Select, {
      id: "c5",
      options: window.RC_PRODUCTS.map(p => p.name).concat(['Something else'])
    })), /*#__PURE__*/React.createElement(FormField, {
      label: "Quantity",
      htmlFor: "c6"
    }, /*#__PURE__*/React.createElement(Input, {
      id: "c6",
      suffix: "pcs",
      placeholder: "500"
    })), /*#__PURE__*/React.createElement(FormField, {
      label: "Details",
      htmlFor: "c7",
      hint: "Sizes, stock, colors, deadline.",
      style: {
        gridColumn: 'span 2'
      }
    }, /*#__PURE__*/React.createElement(Textarea, {
      id: "c7",
      rows: 4,
      placeholder: "Two-sided, 16pt matte, needed by Friday."
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      label: "I have artwork ready to send",
      checked: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-3)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      icon: "paperclip"
    }, "Attach file"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        setSent(true);
        onSent && onSent();
      }
    }, "Send request"))), sent && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement(Callout, {
      tone: "success",
      title: "Request sent"
    }, "We will reply to your email today with pricing and a turnaround date.")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      tone: "dark",
      pad: "var(--space-6)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-eyebrow)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: 'var(--yellow-500)'
      }
    }, "The shop"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-4)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)'
      }
    }, [['map-pin', '2140 Beatties Ford Rd', 'Charlotte, NC 28216'], ['phone', '(704) 555-0148', 'Mon–Fri, 8 AM – 5 PM'], ['mail', 'orders@rcgraphic.print', 'Quotes same business day']].map(([i, a, b]) => /*#__PURE__*/React.createElement("div", {
      key: a,
      style: {
        display: 'flex',
        gap: 'var(--space-3)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: i,
      size: 18,
      color: "var(--silver)",
      style: {
        marginTop: 2
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--weight-semibold) var(--text-sm)/1.3 var(--font-sans)',
        color: 'var(--white)'
      }
    }, a), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-body-sm)',
        fontSize: 'var(--text-xs)',
        color: 'var(--ink-400)'
      }
    }, b)))))), /*#__PURE__*/React.createElement(Card, {
      pad: "var(--space-6)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--weight-bold) var(--text-sm)/1 var(--font-condensed)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        marginBottom: 'var(--space-4)'
      }
    }, "Turnaround at a glance"), /*#__PURE__*/React.createElement(SpecList, {
      items: [{
        label: 'Cards',
        value: 'Next day'
      }, {
        label: 'Flyers',
        value: 'Next day'
      }, {
        label: 'Stickers',
        value: 'Next day'
      }, {
        label: 'Banners',
        value: '2 business days'
      }, {
        label: 'Yard signs',
        value: '2 business days'
      }, {
        label: 'Forms',
        value: '3 business days'
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "rush",
      icon: "zap"
    }, "4 PM file cutoff"))), /*#__PURE__*/React.createElement(Card, {
      pad: "var(--space-6)",
      style: {
        background: 'var(--ink-100)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        aspectRatio: '16 / 9',
        background: 'var(--ink-200)',
        borderRadius: 'var(--radius-sm)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        color: 'var(--ink-500)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map",
      size: 26
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--weight-bold) var(--text-2xs)/1 var(--font-condensed)',
        letterSpacing: 'var(--tracking-caps-loose)',
        textTransform: 'uppercase'
      }
    }, "Shop location map"))))));
  }
  Object.assign(window, {
    ContactPage
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
(() => {
  const {
    Button,
    Icon,
    Badge,
    Card,
    ProductCard,
    ReviewStars,
    Callout
  } = window.RCGraphicDesignSystem_084885;
  function Hero({
    go
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--ink-700)',
        color: 'var(--white)',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: 'var(--space-11) var(--space-6)',
        display: 'grid',
        gridTemplateColumns: '1.1fr .9fr',
        gap: 'var(--space-10)',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
      tone: "rush",
      solid: true,
      icon: "zap"
    }, "Next-day printing"), /*#__PURE__*/React.createElement("h1", {
      style: {
        font: 'var(--type-display)',
        color: 'var(--white)',
        letterSpacing: 'var(--tracking-tight)',
        margin: 'var(--space-4) 0 0'
      }
    }, "Printed right, printed fast."), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 'var(--space-4)',
        font: 'var(--type-body)',
        fontSize: 'var(--text-md)',
        color: 'var(--ink-300)',
        maxWidth: '46ch',
        textWrap: 'pretty'
      }
    }, "Business cards, flyers, carbonless forms, banners, yard signs and custom stickers \u2014 designed and printed in one shop. Upload a press-ready file or let us set it up for you."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-3)',
        marginTop: 'var(--space-7)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: () => go('product'),
      iconAfter: "arrow-right"
    }, "Start your order"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "onDark",
      onClick: () => go('contact')
    }, "Get a quote")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-7)',
        marginTop: 'var(--space-8)',
        flexWrap: 'wrap'
      }
    }, [['printer', 'In-house press'], ['badge-check', 'Free digital proof'], ['truck', 'Ship or pick up']].map(([i, l]) => /*#__PURE__*/React.createElement("span", {
      key: l,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        font: 'var(--weight-bold) var(--text-2xs)/1 var(--font-condensed)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: 'var(--silver)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: i,
      size: 16,
      color: "var(--silver)"
    }), l)))), /*#__PURE__*/React.createElement("div", {
      style: {
        aspectRatio: '4 / 3',
        background: 'var(--ink-800)',
        border: '1px solid var(--ink-600)',
        borderRadius: 'var(--radius-sm)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        color: 'var(--ink-500)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "image",
      size: 34,
      color: "var(--ink-500)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--weight-bold) var(--text-2xs)/1 var(--font-condensed)',
        letterSpacing: 'var(--tracking-caps-loose)',
        textTransform: 'uppercase'
      }
    }, "Hero photo \u2014 printed samples"))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement("i", {
      style: {
        flex: 1,
        background: 'var(--cyan-500)'
      }
    }), /*#__PURE__*/React.createElement("i", {
      style: {
        flex: 1,
        background: 'var(--pine-500)'
      }
    }), /*#__PURE__*/React.createElement("i", {
      style: {
        flex: 1,
        background: 'var(--yellow-500)'
      }
    }), /*#__PURE__*/React.createElement("i", {
      style: {
        flex: 1,
        background: 'var(--ink-950)'
      }
    })));
  }
  function Home({
    go,
    onAdd
  }) {
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
      go: go
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: 'var(--space-10) var(--space-6) 0'
      }
    }, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: "What we print",
      title: "Six things, done properly",
      note: "Prices shown are for the smallest run."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 'var(--space-5)'
      }
    }, window.RC_PRODUCTS.map(p => /*#__PURE__*/React.createElement(ProductCard, {
      key: p.slug,
      name: p.name,
      blurb: p.blurb,
      startingAt: p.from,
      turnaround: p.turnaround,
      icon: p.icon,
      badge: p.badge,
      onClick: () => go('product')
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-11)'
      }
    }, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: "How it works",
      title: "File to doorstep in four steps"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 'var(--space-5)'
      }
    }, [['upload', 'Send your file', 'PDF, AI or a photo of a sketch.'], ['pen-tool', 'We set it up', 'Bleed, trim and color checked by hand.'], ['badge-check', 'Approve the proof', 'Digital proof back the same day.'], ['truck', 'Print & deliver', 'Ship anywhere or pick up in shop.']].map(([i, t, d], n) => /*#__PURE__*/React.createElement(Card, {
      key: t,
      pad: "var(--space-5)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: i,
      size: 22,
      color: "var(--pine-500)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--weight-bold) var(--text-2xl)/1 var(--font-display)',
        color: 'var(--ink-200)'
      }
    }, n + 1)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-4)',
        font: 'var(--type-h3)',
        color: 'var(--text-strong)'
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 6,
        font: 'var(--type-body-sm)',
        color: 'var(--text-muted)'
      }
    }, d))))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-11)',
        display: 'grid',
        gridTemplateColumns: '1.3fr 1fr',
        gap: 'var(--space-7)',
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      tone: "dark",
      pad: "var(--space-8)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-eyebrow)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: 'var(--yellow-500)'
      }
    }, "Design services"), /*#__PURE__*/React.createElement("h2", {
      style: {
        font: 'var(--type-h2)',
        color: 'var(--white)',
        marginTop: 'var(--space-3)'
      }
    }, "No artwork? We will draw it up."), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 'var(--space-3)',
        font: 'var(--type-body)',
        color: 'var(--ink-300)',
        maxWidth: '48ch'
      }
    }, "Send a logo, a rough sketch or just your details. Layout and press setup start at $45 and include one round of revisions."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-6)',
        display: 'flex',
        gap: 'var(--space-3)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "onDark",
      onClick: () => go('contact')
    }, "Talk to a designer"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      style: {
        color: 'var(--ink-300)'
      }
    }, "See samples"))), /*#__PURE__*/React.createElement(Card, {
      pad: "var(--space-6)"
    }, /*#__PURE__*/React.createElement(ReviewStars, {
      value: 4.8,
      count: 1240
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 'var(--space-4)',
        font: 'var(--type-body)',
        color: 'var(--text-body)'
      }
    }, "\"Dropped off a napkin sketch on Tuesday, had 500 cards and a banner Thursday morning. The proof caught a typo I missed.\""), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-4)',
        font: 'var(--weight-bold) var(--text-2xs)/1.4 var(--font-condensed)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, "Dana W. \xB7 Riverbend Landscaping"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement(Callout, {
      tone: "info",
      title: "Reorders are one click"
    }, "Past jobs stay on file for exact reprints."))))));
  }
  Object.assign(window, {
    Home,
    Hero
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductPage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(() => {
  const {
    Button,
    Icon,
    Badge,
    Card,
    Breadcrumb,
    Tabs,
    OptionTile,
    QuantityStepper,
    PriceTable,
    TurnaroundOption,
    SpecList,
    ReviewStars,
    Callout,
    Checkbox,
    FormField,
    Select,
    Tooltip
  } = window.RCGraphicDesignSystem_084885;
  function ProductPage({
    go,
    onAdd
  }) {
    const [stock, setStock] = React.useState('16pt matte');
    const [size, setSize] = React.useState('3.5 x 2 in');
    const [qty, setQty] = React.useState(500);
    const [turn, setTurn] = React.useState('Next day');
    const [tab, setTab] = React.useState('Specs');
    const [rounded, setRounded] = React.useState(false);
    const row = window.RC_PRICES.find(r => r.qty === qty) || window.RC_PRICES[1];
    const base = Number(row.total.replace(/[^0-9.]/g, ''));
    const stockAdd = {
      '16pt matte': 14,
      '18pt uncoated': 22,
      '32pt ultra thick': 46
    }[stock] || 0;
    const turnAdd = {
      'Next day': 18,
      '2 business days': 9
    }[turn] || 0;
    const total = (base + stockAdd + turnAdd + (rounded ? 12 : 0)).toFixed(2);
    return /*#__PURE__*/React.createElement("main", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: 'var(--space-6) var(--space-6) 0'
      }
    }, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: [{
        label: 'Home',
        href: '#'
      }, {
        label: 'All products',
        href: '#'
      }, 'Business cards']
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--space-9)',
        marginTop: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        aspectRatio: '4 / 3',
        background: 'var(--ink-100)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-sm)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        color: 'var(--ink-400)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "credit-card",
      size: 38
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--weight-bold) var(--text-2xs)/1 var(--font-condensed)',
        letterSpacing: 'var(--tracking-caps-loose)',
        textTransform: 'uppercase'
      }
    }, "Product photo")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 'var(--space-3)',
        marginTop: 'var(--space-3)'
      }
    }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        aspectRatio: '1',
        background: 'var(--ink-100)',
        border: i === 0 ? '1px solid var(--border-selected)' : '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-sm)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--ink-400)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "image",
      size: 16
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-7)'
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      items: ['Specs', 'File setup', 'Turnaround', 'Reviews'],
      value: tab,
      onChange: setTab
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: 'var(--space-5)'
      }
    }, tab === 'Specs' && /*#__PURE__*/React.createElement(SpecList, {
      items: [{
        label: 'Trim size',
        value: size
      }, {
        label: 'Stock',
        value: stock
      }, {
        label: 'Sides',
        value: 'Both, full color'
      }, {
        label: 'Coating',
        value: 'Gloss, matte or none'
      }, {
        label: 'Min order',
        value: '250 pieces'
      }, {
        label: 'Corners',
        value: rounded ? '1/4 in rounded' : 'Square'
      }]
    }), tab === 'File setup' && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement(Callout, {
      tone: "info",
      title: "Add 0.125 in bleed on every side"
    }, "Keep text and logos 0.25 in inside the trim line."), /*#__PURE__*/React.createElement(SpecList, {
      items: [{
        label: 'Resolution',
        value: '300 dpi at final size'
      }, {
        label: 'Color',
        value: 'CMYK, no spot channels'
      }, {
        label: 'Files',
        value: 'PDF, AI, EPS or PNG'
      }]
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      icon: "download"
    }, "Download template"))), tab === 'Turnaround' && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement(Callout, {
      tone: "rush",
      title: "4 PM cutoff"
    }, "Press-ready files approved before 4 PM print the next business day."), /*#__PURE__*/React.createElement(SpecList, {
      items: [{
        label: 'Next day',
        value: 'Cards, flyers, stickers'
      }, {
        label: '2 days',
        value: 'Banners, yard signs'
      }, {
        label: '3 days',
        value: 'Carbonless forms'
      }]
    })), tab === 'Reviews' && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement(ReviewStars, {
      value: 4.8,
      count: 1240
    }), [['Marcus T.', 'Colors matched the proof exactly. Third reorder this year.'], ['Priya S.', 'The matte stock feels heavier than what I was getting online.']].map(([n, q]) => /*#__PURE__*/React.createElement("div", {
      key: n
    }, /*#__PURE__*/React.createElement(ReviewStars, {
      value: 5,
      size: 13
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 6,
        font: 'var(--type-body-sm)'
      }
    }, q), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 4,
        font: 'var(--weight-bold) var(--text-2xs)/1 var(--font-condensed)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, n))))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
      tone: "rush",
      icon: "zap"
    }, "Next day available"), /*#__PURE__*/React.createElement("h1", {
      style: {
        font: 'var(--type-h1)',
        marginTop: 'var(--space-3)'
      }
    }, "Business cards"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-4)',
        marginTop: 'var(--space-3)'
      }
    }, /*#__PURE__*/React.createElement(ReviewStars, {
      value: 4.8,
      count: 1240
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-body-sm)',
        color: 'var(--text-muted)'
      }
    }, "SKU BC-16PT")), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 'var(--space-4)',
        font: 'var(--type-body)',
        color: 'var(--text-body)',
        maxWidth: '52ch'
      }
    }, "Full-color both sides on heavy stock, trimmed in-house. Free digital proof with every order."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-6)',
        marginTop: 'var(--space-7)'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
      n: "1",
      text: "Paper stock"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--space-2)'
      }
    }, window.RC_STOCKS.map(s => /*#__PURE__*/React.createElement(OptionTile, _extends({
      key: s.title
    }, s, {
      selected: stock === s.title,
      onClick: () => setStock(s.title)
    }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
      n: "2",
      text: "Size & shape"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-2)'
      }
    }, window.RC_SIZES.map(s => /*#__PURE__*/React.createElement(OptionTile, _extends({
      key: s.title
    }, s, {
      icon: "ruler",
      selected: size === s.title,
      onClick: () => setSize(s.title)
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-3)'
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      label: "Rounded corners",
      description: "+$12 per run",
      checked: rounded,
      onChange: () => setRounded(!rounded)
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
      n: "3",
      text: "Quantity"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-4)',
        marginBottom: 'var(--space-3)'
      }
    }, /*#__PURE__*/React.createElement(QuantityStepper, {
      value: qty,
      step: 250,
      min: 250,
      onChange: setQty
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-body-sm)',
        color: 'var(--text-muted)'
      }
    }, "Price breaks at 500 and 1,000.")), /*#__PURE__*/React.createElement(PriceTable, {
      rows: window.RC_PRICES,
      selected: qty,
      onSelect: setQty
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
      n: "4",
      text: "Turnaround"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 'var(--space-3)'
      }
    }, window.RC_TURNAROUND.map(t => /*#__PURE__*/React.createElement(TurnaroundOption, _extends({
      key: t.name
    }, t, {
      selected: turn === t.name,
      onClick: () => setTurn(t.name)
    })))))), /*#__PURE__*/React.createElement(Card, {
      style: {
        marginTop: 'var(--space-7)',
        position: 'sticky',
        bottom: 'var(--space-4)'
      },
      pad: "var(--space-5)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--weight-bold) var(--text-2xs)/1.4 var(--font-condensed)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, qty.toLocaleString(), " \xB7 ", stock, " \xB7 ", turn), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--weight-bold) var(--text-2xl)/1 var(--font-sans)',
        color: 'var(--text-strong)',
        marginTop: 6
      }
    }, "$", total), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-body-sm)',
        fontSize: 'var(--text-xs)',
        color: 'var(--text-muted)',
        marginTop: 4
      }
    }, row.each, " each \xB7 tax calculated at checkout")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-3)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      icon: "upload"
    }, "Upload file"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: () => {
        onAdd({
          qty,
          stock,
          turn,
          total
        });
        go('cart');
      }
    }, "Add to cart")))))));
  }
  function Label({
    n,
    text
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        marginBottom: 'var(--space-3)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 20,
        height: 20,
        flex: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--ink-800)',
        color: 'var(--white)',
        borderRadius: 'var(--radius-pill)',
        font: 'var(--weight-bold) var(--text-3xs)/1 var(--font-sans)'
      }
    }, n), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--weight-bold) var(--text-sm)/1 var(--font-condensed)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: 'var(--text-strong)'
      }
    }, text), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: 'var(--border-subtle)'
      }
    }));
  }
  Object.assign(window, {
    ProductPage,
    Label
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
const RC_PRODUCTS = [{
  slug: 'business-cards',
  name: 'Business cards',
  icon: 'credit-card',
  blurb: '16pt, 3.5 x 2 in, full color both sides',
  from: '$24.50',
  turnaround: 'Next day',
  badge: 'Popular'
}, {
  slug: 'flyers',
  name: 'Flyers',
  icon: 'file-text',
  blurb: '8.5 x 11 in, 100lb gloss text',
  from: '$38.00',
  turnaround: 'Next day'
}, {
  slug: 'carbonless-forms',
  name: 'Carbonless forms',
  icon: 'files',
  blurb: '2 or 3 part, sequentially numbered',
  from: '$68.00',
  turnaround: '3 days'
}, {
  slug: 'banners',
  name: 'Banners',
  icon: 'flag',
  blurb: '13oz vinyl, hemmed with grommets',
  from: '$54.00',
  turnaround: '2 days'
}, {
  slug: 'yard-signs',
  name: 'Yard signs',
  icon: 'signpost',
  blurb: '18 x 24 in coroplast + H-stake',
  from: '$11.00',
  turnaround: '2 days'
}, {
  slug: 'custom-stickers',
  name: 'Custom stickers',
  icon: 'sticker',
  blurb: 'Die-cut vinyl, indoor or outdoor',
  from: '$19.00',
  turnaround: '3 days'
}];
const RC_STOCKS = [{
  title: '14pt gloss',
  meta: 'Coated both sides',
  priceNote: 'Included',
  swatch: '#F4F4F2'
}, {
  title: '16pt matte',
  meta: 'Soft uncoated feel',
  priceNote: '+$14',
  swatch: '#EFEDE7'
}, {
  title: '18pt uncoated',
  meta: 'Writable surface',
  priceNote: '+$22',
  swatch: '#E9E4DA'
}, {
  title: '32pt ultra thick',
  meta: 'Painted edge available',
  priceNote: '+$46',
  swatch: '#DFD8CB'
}];
const RC_SIZES = [{
  title: '3.5 x 2 in',
  meta: 'Standard US',
  priceNote: 'Included'
}, {
  title: '3.5 x 2 in rounded',
  meta: '1/4 in corners',
  priceNote: '+$12'
}, {
  title: '2 x 3.5 in vertical',
  meta: 'Portrait layout',
  priceNote: 'Included'
}];
const RC_PRICES = [{
  qty: 250,
  each: '$0.14',
  total: '$35.00'
}, {
  qty: 500,
  each: '$0.09',
  total: '$45.00',
  note: 'Best value'
}, {
  qty: 1000,
  each: '$0.07',
  total: '$70.00'
}, {
  qty: 2500,
  each: '$0.05',
  total: '$125.00'
}];
const RC_TURNAROUND = [{
  name: 'Next day',
  shipsBy: 'Ready Thu, Aug 14',
  price: '+$18',
  recommended: true
}, {
  name: '2 business days',
  shipsBy: 'Ready Fri, Aug 15',
  price: '+$9'
}, {
  name: '3 business days',
  shipsBy: 'Ready Mon, Aug 18',
  price: 'Included'
}];
Object.assign(window, {
  RC_PRODUCTS,
  RC_STOCKS,
  RC_SIZES,
  RC_PRICES,
  RC_TURNAROUND
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.PriceTable = __ds_scope.PriceTable;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.ReviewStars = __ds_scope.ReviewStars;

__ds_ns.SpecList = __ds_scope.SpecList;

__ds_ns.TurnaroundOption = __ds_scope.TurnaroundOption;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.FormField = __ds_scope.FormField;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.OptionTile = __ds_scope.OptionTile;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
