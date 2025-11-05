import React, { useMemo } from 'react';
import { Icon } from './icons';

interface SearchProps {
  allTags: string[];
  selectedTags: string[];
  onTagClick: (tag: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const customTagOrder = [
    'Open Source',
    'Free',
    'Free Tier',
    'Android',
    'iOS',
    'Windows',
    'MacOS',
    'Linux',
    'Google Chrome',
    'Firefox',
    'Chromium',
    'Gecko',
    'Hardware',
    'Web Extension',
];


const Search: React.FC<SearchProps> = ({ allTags, selectedTags, onTagClick, searchTerm, onSearchChange }) => {

  const sortedTags = useMemo(() => {
    return [...allTags].sort((a, b) => {
      const indexA = customTagOrder.indexOf(a);
      const indexB = customTagOrder.indexOf(b);

      if (indexA > -1 && indexB > -1) {
        return indexA - indexB; // Both in custom order, sort by custom order
      }
      if (indexA > -1) {
        return -1; // Only a is in custom order, a comes first
      }
      if (indexB > -1) {
        return 1; // Only b is in custom order, b comes first
      }
      return a.localeCompare(b); // Neither in custom order, sort alphabetically
    });
  }, [allTags]);

  return (
    <section id="search" className="mb-12 bg-white dark:bg-dark-card p-6 rounded-[20px] shadow-lg scroll-mt-20">
      <div className="flex items-center gap-4 mb-6">
        <Icon name="Search" className="w-8 h-8 text-primary" />
        <h2 className="text-2xl font-bold">Search & Filter</h2>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Filter by tags or use the search bar to find specific resources.
      </p>

      <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search by name or description..."
              className="w-full px-4 py-2 pl-10 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Icon name="Search" className="w-5 h-5 text-gray-400" />
            </div>
          </div>
      </div>

      <div>
          <h3 className="font-semibold mb-3 text-gray-800 dark:text-gray-200">Filter by Tags:</h3>
          <div className="flex flex-wrap gap-2">
              {sortedTags.map(tag => {
                  const isSelected = selectedTags.includes(tag);
                  return (
                      <button
                          key={tag}
                          onClick={() => onTagClick(tag)}
                          className={`text-xs px-3 py-1 rounded-[20px] border transition-colors ${
                              isSelected
                                  ? 'bg-primary text-white border-primary'
                                  : 'bg-transparent text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                      >
                          {tag}
                      </button>
                  );
              })}
          </div>
      </div>
    </section>
  );
};

export default Search;