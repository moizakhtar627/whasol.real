/**
 * WhaSol Centralized Error Code Data
 *
 * All real solar inverter error-code articles are stored here.
 * This file is the single source of truth for the Error Codes page:
 *   - Dynamic error-code listing
 *   - Brand filtering
 *   - Search functionality
 *   - Individual article pages
 *   - SEO metadata
 *   - Dynamic article counts
 *
 * To publish a new error-code article, add an object to WHASOL_ERROR_CODES
 * following this schema:
 *
 * {
 *   id: "unique-id-string",
 *   errorCode: "E02",
 *   title: "Inverter Error Code E02",
 *   metaTitle: "SEO title for <title> tag",
 *   metaDescription: "Short SEO description (150-160 chars)",
 *   brand: "Growatt",
 *   category: "Inverter Error",
 *   tags: ["array", "of", "keywords", "for", "search"],
 *   publishedAt: "ISO 8601 date string (e.g. 2026-09-15T09:00:00)",
 *   slug: "error-codes/e02-some-slug"
 * }
 *
 * When this array is populated, the Error Codes page will automatically
 * render a dynamic, searchable, brand-filterable listing. While it stays
 * empty, the page displays a clean empty state.
 */

window.WHASOL_ERROR_CODES = [];