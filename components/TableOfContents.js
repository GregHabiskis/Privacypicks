import { jsx, jsxs } from "react/jsx-runtime";
import React from 'react';
import { Icon } from './icons.js';

const TableOfContents = ({ data, onLinkClick }) => {
  const handleLinkClick = (event, href) => {
    event.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (onLinkClick) {
      onLinkClick();
    }
  };

  return (
    jsx("nav", {
      children: jsxs("ul", { className: "space-y-4", children: [
        jsx("li", {
          children: jsxs("a", {
            href: "#search",
            onClick: (e) => handleLinkClick(e, '#search'),
            className: "flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-semibold transition-colors",
            children: [
              jsx(Icon, { name: "Search", size: 16 }),
              jsx("span", { children: "Search" })
            ]
          })
        }),
        data.map((category) => (
          jsx("li", {
            children: [
              jsxs("a", {
                href: `#${category.id}`,
                onClick: (e) => handleLinkClick(e, `#${category.id}`),
                className: "flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-semibold transition-colors",
                children: [
                  jsx(Icon, { name: category.icon, size: 16 }),
                  jsx("span", { children: category.title })
                ]
              }),
              category.subCategories && category.subCategories.length > 0 && (
                jsx("ul", { className: "pl-4 mt-2 space-y-2 border-l border-gray-200 dark:border-gray-700 ml-4", children: 
                  category.subCategories.map((sub) => (
                    jsx("li", {
                      children: jsxs("a", {
                        href: `#${sub.id}`,
                        onClick: (e) => handleLinkClick(e, `#${sub.id}`),
                        className: "flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors",
                        children: [
                          jsx(Icon, { name: sub.icon, size: 14 }),
                          jsx("span", { children: sub.title })
                        ]
                      })
                    }, sub.id)
                  ))
                 })
              )
            ]
          }, category.id)
        ))
      ] })
    })
  );
};

export default TableOfContents;
