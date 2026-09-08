import { useEffect } from 'react';

/**
 * PageSEO – lightweight per-page SEO helper.
 * Sets document.title, meta description, and canonical link
 * on every route change without needing react-helmet.
 */
export default function PageSEO({ title, description, canonical, jsonLd }) {
  useEffect(() => {
    // Title
    if (title) document.title = title;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    if (description) metaDesc.setAttribute('content', description);

    // Canonical
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.rel = 'canonical';
      document.head.appendChild(canonicalEl);
    }
    if (canonical) canonicalEl.setAttribute('href', canonical);

    // JSON-LD structured data (page-level schema, appended per page)
    if (jsonLd) {
      const existingId = document.getElementById('page-jsonld');
      if (existingId) existingId.remove();
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'page-jsonld';
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    // Cleanup: restore homepage defaults when navigating away
    return () => {
      const existingId = document.getElementById('page-jsonld');
      if (existingId) existingId.remove();
    };
  }, [title, description, canonical, jsonLd]);

  return null;
}
