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
 *   tags: ["array", "of", "keywords", "for", "search"],
 *   publishedAt: "ISO 8601 date string (e.g. 2026-09-15T09:00:00)",
 *   slug: "guides/article-url-slug"
 * }
 *
 * Categories must match one of these keys:
 *   inverter     -> Inverter Problems
 *   battery      -> Battery Issue
 *   solar-panel  -> Solar Panel Problems
 *   wiring       -> Wiring & Electrical
 *   voltage      -> Voltage & Frequency
 */

window.WHASOL_CATEGORIES = [
  { key: "all",            label: "All Problems" },
  { key: "inverter",       label: "Inverter Problems" },
  { key: "battery",        label: "Battery Issue" },
  { key: "solar-panel",    label: "Solar Panel Problems" },
  { key: "wiring",         label: "Wiring & Electrical" },
  { key: "voltage",        label: "Voltage & Frequency" }
];

window.WHASOL_ARTICLES = [];
