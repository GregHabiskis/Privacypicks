import { jsx, jsxs } from "react/jsx-runtime";
import React from 'react';
import { Icon } from './icons.js';
import TableOfContents from './TableOfContents.js';

const Sidebar = ({ data, isOpen, toggleSidebar }) => {
  const handleLinkClick = () => {
    if (isOpen) {
      toggleSidebar();
    }
  };

  return (
    jsxs(React.Fragment, { children: [
      jsx("div", {
        className: `fixed inset-0 z-30 bg-black/50 transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`,
        onClick: toggleSidebar,
        "aria-hidden": "true"
      }),
      jsx("aside", {
        className: `fixed top-16 right-0 bottom-0 z-40 w-72 max-w-[80vw] bg-white dark:bg-dark-card transform transition-transform duration-300 ease-in-out rounded-tl-2xl rounded-bl-2xl shadow-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`,
        children: 
        jsx("div", { className: "p-6 h-full overflow-y-auto hide-scrollbar", children: [
          jsxs("div", { className: "flex justify-between items-center mb-4", children: [
            jsx("h2", { className: "font-bold text-lg", children: "Menu" }),
            jsx("button", { onClick: toggleSidebar, className: "p-1", "aria-label": "Close menu", children: 
              jsx(Icon, { name: "X", size: 20 })
            })
          ] }),
          jsx(TableOfContents, { data: data, onLinkClick: handleLinkClick })
        ] })
      })
    ] })
  );
};

export default Sidebar;
