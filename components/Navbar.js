import { jsx, jsxs } from "react/jsx-runtime";
import React from 'react';
import ThemeToggle from './ThemeToggle.js';
import { Icon } from './icons.js';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    jsx("header", { className: "bg-white/70 dark:bg-dark-card/70 backdrop-blur-lg sticky top-0 z-50 shadow-md", children: 
      jsxs("div", { className: "container mx-auto px-4 py-3 flex justify-between items-center", children: [
        jsxs("div", { className: "flex items-center gap-4", children: [
            jsx(Icon, { name: "Shield", className: "w-8 h-8 text-primary" }),
            jsx("h1", { className: "text-2xl font-bold text-gray-800 dark:text-gray-200", children: "Privacy Picks" })
        ] }),
        jsx(ThemeToggle, { theme: theme, toggleTheme: toggleTheme })
      ] })
    })
  );
};

export default Navbar;
