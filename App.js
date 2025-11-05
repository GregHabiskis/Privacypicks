import { jsx, jsxs } from "react/jsx-runtime";
import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar.js';
import Sidebar from './components/Sidebar.js';
import ResourceSection from './components/ResourceSection.js';
import Search from './components/Search.js';
import Footer from './components/Footer.js';
import FloatingTocButton from './components/FloatingTocButton.js';
import { RESOURCES_DATA } from './constants.js';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.style.setProperty('color-scheme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.setProperty('color-scheme', 'light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const handleTagClick = (tag) => {
    setSelectedTags(prevTags => {
        if (prevTags.includes(tag)) {
            return prevTags.filter(t => t !== tag);
        } else {
            return [...prevTags, tag];
        }
    });
  };

  const allTags = useMemo(() => {
    const tags = new Set();
    RESOURCES_DATA.forEach(category => {
        category.subCategories.forEach(sub => {
            sub.links.forEach(link => {
                link.tags.forEach(tag => tags.add(tag));
            });
        });
    });
    return Array.from(tags).sort();
  }, []);

  const filteredResources = useMemo(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    let resources = RESOURCES_DATA;

    if (selectedTags.length > 0) {
        resources = resources.map(category => ({
            ...category,
            subCategories: category.subCategories.map(sub => ({
                ...sub,
                links: sub.links.filter(link =>
                    selectedTags.every(tag => link.tags.includes(tag))
                )
            })).filter(sub => sub.links.length > 0)
        })).filter(category => category.subCategories.length > 0);
    }

    if (lowerCaseSearchTerm) {
        resources = resources.map(category => ({
            ...category,
            subCategories: category.subCategories.map(sub => ({
                ...sub,
                links: sub.links.filter(link => 
                    link.name.toLowerCase().includes(lowerCaseSearchTerm) || 
                    link.description.toLowerCase().includes(lowerCaseSearchTerm)
                )
            })).filter(sub => sub.links.length > 0)
        })).filter(category => category.subCategories.length > 0);
    }

    return resources;
  }, [selectedTags, searchTerm]);


  return (
    jsxs("div", { className: "bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-gray-100 min-h-screen font-sans", children: [
      jsx(Navbar, { theme: theme, toggleTheme: toggleTheme }),
      jsx("div", { className: "container mx-auto px-4 py-8", children: [
        jsx(Sidebar, { data: RESOURCES_DATA, isOpen: isSidebarOpen, toggleSidebar: toggleSidebar }),
        jsx("main", { className: "min-w-0", children: [
            jsx(Search, { 
                allTags: allTags,
                selectedTags: selectedTags,
                onTagClick: handleTagClick,
                searchTerm: searchTerm,
                onSearchChange: setSearchTerm
            }),
            filteredResources.map((category) => (
              jsx(ResourceSection, { 
                category: category,
                selectedTags: selectedTags,
                onTagClick: handleTagClick
              }, category.id)
            ))
        ] })
      ] }),
      jsx(Footer, {}),
      jsx(FloatingTocButton, { toggleSidebar: toggleSidebar, isOpen: isSidebarOpen })
    ] })
  );
};

export default App;
