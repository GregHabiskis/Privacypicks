import { jsx } from "react/jsx-runtime";
import React from 'react';
import { Icon } from './icons.js';

const FloatingTocButton = ({ toggleSidebar, isOpen }) => {
  return (
    jsx("button", {
      onClick: toggleSidebar,
      className: "fixed top-1/2 right-0 z-20 transform -translate-y-1/2 w-14 h-14 flex items-center justify-center bg-primary text-white rounded-tl-[20px] rounded-bl-[20px] shadow-lg hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-dark-bg transition-all duration-300 ease-in-out pulse-animation",
      "aria-label": isOpen ? 'Close table of contents' : 'Open table of contents',
      "aria-expanded": isOpen,
      children: jsx(Icon, { name: "Menu", size: 24 })
    })
  );
};

export default FloatingTocButton;
