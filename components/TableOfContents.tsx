// FIX: Implemented smooth scrolling and prevented default link behavior to fix navigation issues.
import React from 'react';
import { Icon } from './icons';
import { type ResourceCategory } from '../types';

interface TableOfContentsProps {
  data: ResourceCategory[];
  onLinkClick?: () => void;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ data, onLinkClick }) => {
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
        // The 'scroll-mt-20' class on the sections provides the necessary offset for the sticky header.
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (onLinkClick) {
      onLinkClick();
    }
  };

  return (
    <nav>
      <ul className="space-y-4">
        <li>
          <a
            href="#search"
            onClick={(e) => handleLinkClick(e, '#search')}
            className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-semibold transition-colors"
          >
            <Icon name="Search" size={16} />
            <span>Search</span>
          </a>
        </li>
        
        {data.map((category) => (
          <li key={category.id}>
            <a
              href={`#${category.id}`}
              onClick={(e) => handleLinkClick(e, `#${category.id}`)}
              className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-semibold transition-colors"
            >
              <Icon name={category.icon} size={16} />
              <span>{category.title}</span>
            </a>
            {category.subCategories && category.subCategories.length > 0 && (
              <ul className="pl-4 mt-2 space-y-2 border-l border-gray-200 dark:border-gray-700 ml-4">
                {category.subCategories.map((sub) => (
                  <li key={sub.id}>
                    <a
                      href={`#${sub.id}`}
                      onClick={(e) => handleLinkClick(e, `#${sub.id}`)}
                      className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      <Icon name={sub.icon} size={14} />
                      <span>{sub.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;