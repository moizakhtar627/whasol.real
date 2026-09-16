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
    publishedAt: "2026-09-16T12:20:00",
    slug: "blog/solar-battery-troubleshooting-wiring-safety",
    content: "<h2>1. Common Solar Battery Problems</h2><p>Diagnosing the five most common solar battery faults: overcharging, undercharging, overheating, physical damage or swelling, and short backup time.</p><h2>2. Solar Battery Maintenance Checklist</h2><p>Monthly visual checks, quarterly terminal tightening, bi-annual cleaning, and periodic hydrometer checks for flooded batteries.</p><h2>3. Essential Battery Wiring Safety Rules</h2><p>Core assembly order, proper fusing, insulated tools, and load terminal guidance.</p><h2>4. Step-by-Step Solar Battery Wiring Overview</h2><p>Safe connection sequence from battery bank to charge controller, solar panels, and inverter.</p><h2>5. Important Safety Considerations</h2><p>Energy storage hazards, lithium handling requirements, and professional inspection guidance.</p><h2>6. When to Contact a Qualified Solar Technician</h2><p>Recognizing situations that require a certified electrician.</p>"
  }
];
