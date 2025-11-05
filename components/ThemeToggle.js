import { jsx } from "react/jsx-runtime";
import React from 'react';
import { Icon } from './icons.js';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    jsx("button", {
      onClick: toggleTheme,
      className: "p-2 rounded-[20px] bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors",
      "aria-label": "Toggle theme",
      children: theme === 'light' ? jsx(Icon, { name: "Moon", size: 20 }) : jsx(Icon, { name: "Sun", size: 20 })
    })
  );
};

export default ThemeToggle;
