// Keep operational resources reachable by URL, but out of public discovery.
const unlistedResourceSlugs = new Set(["stripe-test-download"]);

/** @param {string} slug */
export function isPublicResourceSlug(slug) {
  return !unlistedResourceSlugs.has(slug);
}

/** @param {string} page */
export function includeInSitemap(page) {
  const path = new URL(page).pathname;
  if (path.includes("/success/")) return false;
  const resource = path.match(/^\/resources\/([^/]+)\/?$/);
  return !resource || isPublicResourceSlug(resource[1]);
}
