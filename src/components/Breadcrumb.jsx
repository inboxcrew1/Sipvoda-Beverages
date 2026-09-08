import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

/**
 * Breadcrumb – accessible breadcrumb navigation for inner pages.
 * Props:
 *   items: [{ label: 'Home', href: '/' }, { label: 'Custom Bottles', href: '/custom-water-bottles' }, { label: 'Current Page' }]
 */
export default function Breadcrumb({ items = [] }) {
  if (!items.length) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2"
    >
      <ol className="flex flex-wrap items-center gap-1 text-xs text-slate-500 font-medium">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-azure-600 transition-colors"
            aria-label="Home"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <React.Fragment key={idx}>
              <li aria-hidden="true">
                <ChevronRight className="w-3 h-3 text-slate-400" />
              </li>
              <li>
                {isLast || !item.href ? (
                  <span className="text-navy-900 font-semibold" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.href}
                    className="hover:text-azure-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
