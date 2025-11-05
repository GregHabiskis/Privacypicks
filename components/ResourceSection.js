import { jsx, jsxs } from "react/jsx-runtime";
import React from 'react';
import { Icon } from './icons.js';

const SourceIcon = ({ type }) => {
    const commonClasses = "text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors";
    switch (type) {
        case 'github':
            return jsx(Icon, { name: "GitHub", size: 20, className: commonClasses });
        case 'gitlab':
            return jsx(Icon, { name: "Gitlab", size: 20, className: commonClasses });
        case 'youtube':
            return jsx(Icon, { name: "Youtube", size: 20, className: commonClasses });
        case 'playstore':
            return jsx(Icon, { name: "Play", size: 20, className: commonClasses });
        case 'appstore':
            return jsx(Icon, { name: "ShoppingBag", size: 20, className: commonClasses });
        case 'fdroid':
            return jsx(Icon, { name: "Package", size: 20, className: commonClasses });
        case 'chrome':
            return jsx(Icon, { name: "Chrome", size: 20, className: commonClasses });
        case 'firefox':
            return jsx(Icon, { name: "Globe", size: 20, className: commonClasses });
        default:
            return jsx(Icon, { name: "ExternalLink", size: 20, className: commonClasses });
    }
}


const ResourceSection = ({ category, selectedTags, onTagClick }) => {
  return (
    jsxs("section", { id: category.id, className: "mb-16 scroll-mt-20", children: [
      jsxs("div", { className: "flex items-center justify-center gap-4 mb-8", children: [
        jsx(Icon, { name: category.icon, className: "w-10 h-10 text-primary" }),
        jsx("h2", { className: "text-3xl font-bold", children: category.title })
      ] }),

      category.id === 'operating-systems' && (
        jsxs("div", { className: "max-w-4xl mx-auto mb-10 text-center text-gray-600 dark:text-gray-400", children: [
            jsx("p", { className: "mb-4", children: "Linux is not a standalone operating system—it's a kernel, the core of an operating system. The ones mentioned below are called Linux distributions (or “distros” for short). I chose these specifically for their beginner-friendly nature and strong privacy and security practices out of the box. Not every Linux distro is created equal, but almost all guarantee better privacy, digital control, and open-source values than Windows or macOS." }),
            jsxs("p", { children: [
                "If you want to learn more about other distros, you can use ",
                jsx("a", { href: "https://distrochooser.de/", className: "text-primary hover:brightness-90", target: "_blank", rel: "noopener noreferrer", children: "Distrochooser" }),
                " to help you find the one that makes the most sense for you."
            ] })
        ] })
      ),
      
      category.subCategories.map((sub) => (
        jsxs("div", { id: sub.id, className: "mb-12 scroll-mt-20", children: [
            jsxs("div", { className: "flex items-center justify-center gap-3 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4", children: [
                jsx(Icon, { name: sub.icon, size: 24, className: "text-primary" }),
                jsx("h3", { className: "text-2xl font-semibold text-center", children: 
                    sub.title
                 })
            ] }),

            sub.links.length > 0 ? (
                jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: 
                sub.links.map((link) => {
                    const websiteUrl = link.sources.find(s => s.type === 'website')?.url || link.sources[0]?.url || '#';
                    
                    const sourceOrder = ['playstore', 'appstore', 'fdroid', 'github', 'gitlab', 'youtube', 'chrome', 'firefox'];
                    
                    const sortedSourceLinks = link.sources
                        .filter(s => s.type !== 'website' && s.url !== websiteUrl)
                        .sort((a, b) => {
                            const indexA = sourceOrder.indexOf(a.type);
                            const indexB = sourceOrder.indexOf(b.type);
                            if (indexA === -1 && indexB === -1) return 0;
                            if (indexA === -1) return 1;
                            if (indexB === -1) return -1;
                            return indexA - indexB;
                        });

                    return (
                        jsxs("div", { className: "bg-white dark:bg-dark-card p-6 rounded-[20px] shadow-lg flex flex-col h-full hover:shadow-xl transition-shadow duration-300", children: [
                            jsxs("div", { className: "flex justify-between items-start mb-3", children: [
                                jsxs("a", {
                                    href: websiteUrl,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex items-center gap-3 group",
                                    children: [
                                        jsx("img", {
                                            loading: "lazy",
                                            src: link.customIcon ? link.customIcon : `https://api.dicebear.com/8.x/shapes/svg?seed=${link.name}`,
                                            alt: `${link.name} logo`,
                                            className: "w-[55px] h-[55px] rounded-[15px] object-cover"
                                        }),
                                        jsx("span", { className: "text-xl font-bold group-hover:text-primary dark:group-hover:text-primary transition-colors", children: 
                                            link.name
                                         })
                                    ]
                                }),
                                jsx("div", { className: "flex items-center gap-2.5 flex-shrink-0 ml-2 mt-1", children: 
                                    sortedSourceLinks.map(source => (
                                        jsx("a", { href: source.url, target: "_blank", rel: "noopener noreferrer", "aria-label": `${link.name} on ${source.type}`, children: 
                                            jsx(SourceIcon, { type: source.type })
                                        }, source.url)
                                    ))
                                 })
                            ] }),
                            
                            jsx("p", { 
                                className: "text-sm text-gray-600 dark:text-gray-400 flex-grow",
                                dangerouslySetInnerHTML: { __html: link.description }
                            }),
                            jsx("div", { className: "flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700", children: 
                                link.tags.map((tag) => {
                                const isSelected = selectedTags.includes(tag);
                                return (
                                    jsx("button", {
                                    onClick: () => onTagClick(tag),
                                    className: `text-xs px-2 py-1 rounded-[20px] transition-colors ${
                                        isSelected
                                            ? 'bg-primary text-white'
                                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/80'
                                    }`,
                                    children: tag
                                    }, tag)
                                )
                                })
                             })
                        ] }, link.name)
                    )
                })
                 })
            ) : (
                jsxs("div", { className: "text-center py-8 text-gray-500 dark:text-gray-400 bg-white dark:bg-dark-card rounded-[20px] shadow-md", children: [
                    jsx(Icon, { name: "Coffee", className: "mx-auto w-12 h-12 mb-2" }),
                    jsx("p", { children: "Resources coming soon!" })
                ] })
            )
        ] }, sub.id)
      ))
    ] })
  );
};

export default ResourceSection;
