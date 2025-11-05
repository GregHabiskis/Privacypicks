import { jsx, jsxs } from "react/jsx-runtime";
import React from 'react';
import { Icon } from './icons.js';

const Footer = () => {
  return (
    jsx("footer", { className: "bg-white dark:bg-dark-card shadow-inner mt-12", children: 
      jsxs("div", { className: "container mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-400", children: [
        jsxs("p", { children: ["© ", new Date().getFullYear(), " ", jsx("a", { href: "https://privacypicks.com", target: "_blank", rel: "noopener noreferrer", className: "hover:text-primary transition-colors", children: "Privacy Picks" }), ". All rights reserved."] }),
        jsx("p", { className: "text-sm mt-2", children: "Your guide to a more private digital life." }),
         jsxs("div", { className: "flex justify-center gap-4 mt-4", children: [
            jsx("a", { href: "https://github.com/privacypicks", target: "_blank", rel: "noopener noreferrer", "aria-label": "GitHub", className: "hover:text-primary", children: 
                jsx(Icon, { name: "GitHub", size: 20 })
            }),
            jsx("a", { href: "https://x.com/privacypicks", target: "_blank", rel: "noopener noreferrer", "aria-label": "Twitter", className: "hover:text-primary", children: 
                jsx(Icon, { name: "Twitter", size: 20 })
            })
         ] })
      ] })
    })
  );
};

export default Footer;
