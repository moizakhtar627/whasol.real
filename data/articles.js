/**
 * WhaSol Centralized Article Data
 *
 * All troubleshooting guides, blog posts, and fixing articles are stored here.
 * This is the single source of truth for:
 *   - Total article count (Verified Fixes)
 *   - Unique brand count (OEM Brands)
 *   - Category-specific counts (All Problems, Inverter, Battery, etc.)
 *   - Search functionality
 *   - Article rendering on the Troubleshooting and Blog pages
 *
 * To publish a new article, add an object to WHASOL_ARTICLES following this schema:
 *
 * {
 *   id: "unique-id-string",
 *   title: "Full Article Title",
 *   metaTitle: "SEO title for <title> tag",
 *   metaDescription: "Short SEO description (150-160 chars)",
 *   excerpt: "1-3 sentence summary shown on cards",
 *   category: "inverter" | "battery" | "solar-panel" | "wiring" | "voltage",
 *   brand: "Brand name (e.g. SolaX, Sungrow, Growatt, Universal Solar)",
 *   author: "Author name (e.g. 'Raj Patel, PE') - optional",
 *   tags: ["array", "of", "keywords", "for", "search"],
 *   publishedAt: "ISO 8601 date string (e.g. 2026-09-15T09:00:00)",
 *   featuredImage: "URL/path to article hero image - optional",
 *   slug: "guides/article-url-slug" or "blog/article-url-slug",
 *   content: "Full article body (markdown or HTML) for the future article detail page"
 * }
 *
 * Blog page category display names map to these keys as follows:
 *   all                -> ALL ARTICLES (filter only)
 *   inverter           -> INVERTER ARCHITECTURE
 *   solar-battery-guide-> SOLAR BATTERY GUIDE
 *   solar-panel        -> SOLAR PV ARRAY DIAGNOSTICS
 *   wiring             -> WIRING & CONNECTIONS
 *
 * Categories match WHASOL_CATEGORIES keys below, which the Troubleshooting
 * (guides) page uses for its problem-finder counts.
 */

window.WHASOL_CATEGORIES = [
  { key: "all",                 label: "All Problems" },
  { key: "inverter",            label: "Inverter Problems" },
  { key: "solar-battery-guide", label: "Solar Battery Guide" },
  { key: "battery",             label: "Battery Issue" },
  { key: "solar-panel",         label: "Solar Panel Problems" },
  { key: "wiring",              label: "Wiring & Electrical" },
  { key: "voltage",             label: "Voltage & Frequency" }
];

window.WHASOL_CATEGORY_MAP = {
  "inverter":            "inverter",
  "solar-battery-guide": "battery",
  "battery":             "battery",
  "solar-panel":         "solar-panel",
  "wiring":              "wiring",
  "voltage":             "voltage"
};

window.WHASOL_CATEGORY_GRADIENTS = {
  "inverter":            { from: "#0b1623", via: "#112a3d", to: "#0d1f33", icon: "electrical_services" },
  "solar-battery-guide": { from: "#0b1623", via: "#1a1f0e", to: "#0d1f33", icon: "battery_charging_full" },
  "battery":             { from: "#0b1623", via: "#1a1f0e", to: "#0d1f33", icon: "battery_charging_full" },
  "solar-panel":         { from: "#0b1623", via: "#0f2a1e", to: "#0d1f33", icon: "solar_power" },
  "wiring":              { from: "#0b1623", via: "#1f1510", to: "#0d1f33", icon: "cable" },
  "voltage":             { from: "#0b1623", via: "#1a1020", to: "#0d1f33", icon: "electric_meter" }
};

window.WHASOL_ARTICLES = [
  {
    id: "solar-battery-troubleshooting-wiring-safety",
    title: "How to Troubleshoot Solar Batteries and Wire Them Safely",
    metaTitle: "How to Troubleshoot Solar Batteries and Wire Them Safely",
    metaDescription: "Solar battery troubleshooting made clear: how to test voltage, spot bad cables, and wire batteries safely for steady, reliable power at home.",
    excerpt: "Solar battery troubleshooting made clear: how to identify charging problems, test battery voltage, spot damaged cables, and understand safe battery wiring for reliable solar power systems.",
    category: "solar-battery-guide",
    brand: "",
    author: "WHA SOL Engineering",
    readTime: "8 min read",
    imageAlt: "Solar battery wiring and troubleshooting equipment",
    featuredImage: "../assets/images/solar-battery-guide.svg",
    tags: [
      "Solar Batteries",
      "Battery Troubleshooting",
      "Battery Wiring",
      "Battery Charging Problems",
      "Lithium Battery Safety",
      "Off-Grid Solar Systems",
      "Solar Maintenance",
      "Battery"
    ],
    status: "published",
    publishedAt: "2026-09-16T12:20:00",
    slug: "blog/solar-battery-troubleshooting-wiring-safety",
    content: "<h2>1. Common Solar Battery Problems</h2><p>Diagnosing the five most common solar battery faults: overcharging, undercharging, overheating, physical damage or swelling, and short backup time.</p><h2>2. Solar Battery Maintenance Checklist</h2><p>Monthly visual checks, quarterly terminal tightening, bi-annual cleaning, and periodic hydrometer checks for flooded batteries.</p><h2>3. Essential Battery Wiring Safety Rules</h2><p>Core assembly order, proper fusing, insulated tools, and load terminal guidance.</p><h2>4. Step-by-Step Solar Battery Wiring Overview</h2><p>Safe connection sequence from battery bank to charge controller, solar panels, and inverter.</p><h2>5. Important Safety Considerations</h2><p>Energy storage hazards, lithium handling requirements, and professional inspection guidance.</p><h2>6. When to Contact a Qualified Solar Technician</h2><p>Recognizing situations that require a certified electrician.</p>"
  }
];

window.WHASOL_IMAGES = {
  _esc: function (s) {
    if (s == null) return '';
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  },
  buildCategoryFallback: function (category, altText, heightClass) {
    var g = (window.WHASOL_CATEGORY_GRADIENTS || {})[category] || { from: '#0b1623', via: '#112a3d', to: '#0d1f33', icon: 'solar_power' };
    var h = heightClass || 'h-48';
    var label = category ? category.replace(/-/g, ' ').replace(/\b\w/g, function (c) { return c.toUpperCase(); }) : 'Article';
    var bg = 'background:linear-gradient(135deg,' + g.from + ' 0%,' + g.via + ' 50%,' + g.to + ' 100%);';
    return '<div class="w-full ' + h + ' rounded-t-xl flex flex-col items-center justify-center gap-3 relative overflow-hidden" style="' + bg + '">' +
      '<div class="absolute inset-0 opacity-10" style="background:repeating-linear-gradient(45deg,transparent,transparent 20px,rgba(56,217,255,0.05) 20px,rgba(56,217,255,0.05) 40px);"></div>' +
      '<span class="material-symbols-outlined text-4xl text-on-surface-variant relative z-10">' + (g.icon || 'solar_power') + '</span>' +
      '<span class="text-xs text-on-surface-variant font-medium relative z-10 uppercase tracking-wider">' + this._esc(label) + '</span>' +
      '</div>';
  },
  buildArticleFallback: function (category, altText) {
    return this.buildCategoryFallback(category, altText, 'h-56 sm:h-72 md:h-80');
  }
};
