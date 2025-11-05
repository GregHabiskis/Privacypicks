import { jsx, jsxs } from "react/jsx-runtime";
import React, { useMemo } from 'react';
import { Icon } from './icons.js';

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

const Search = ({ allTags, selectedTags, onTagClick, searchTerm, onSearchChange }) => {

  const sortedTags = useMemo(() => {
    return [...allTags].sort((a, b) => {
      const indexA = customTagOrder.indexOf(a);
      const indexB = customTagOrder.indexOf(b);

      if (indexA > -1 && indexB > -1) {
        return indexA - indexB;
      }
      if (indexA > -1) {
        return -1;
      }
      if (indexB > -1) {
        return 1;
      }
      return a.localeCompare(b);
    });
  }, [allTags]);

  return (
    jsxs("section", { id: "search", className: "sticky top-16 z-30 mb-12 bg-white dark:bg-dark-card p-5 rounded-[20px] shadow-lg scroll-mt-20", children: [
      jsx("div", { className: "mb-5", children: 
          jsxs("div", { className: "relative", children: [
            jsx("input", {
              type: "text",
              value: searchTerm,
              onChange: (e) => onSearchChange(e.target.value),
              placeholder: "Search by name or description...",
              className: "w-full px-4 py-2 pl-10 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-primary"
            }),
            jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: 
                jsx(Icon, { name: "Search", className: "w-5 h-5 text-gray-400" })
            })
          ] })
      }),

      jsx("div", {
          children: jsx("div", { className: "flex flex-nowrap gap-2 overflow-x-auto scrollbar-on-hover", children: 
              sortedTags.map(tag => {
                  const isSelected = selectedTags.includes(tag);
                  return (
                      jsx("button", {
                          onClick: () => onTagClick(tag),
                          className: `flex-shrink-0 text-xs px-3 py-1 rounded-[20px] border transition-colors ${
                              isSelected
                                  ? 'bg-primary text-white border-primary'
                                  : 'bg-transparent text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`,
                          children: tag
                      }, tag)
                  );
              })
           })
      })
    ] })
  );
};

export default Search;
