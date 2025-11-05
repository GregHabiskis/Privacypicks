// FIX: Implemented the main App component to structure the application layout and manage state.
import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ResourceSection from './components/ResourceSection';
import Search from './components/Search';
import Footer from './components/Footer';
import FloatingTocButton from './components/FloatingTocButton';
import { RESOURCES_DATA } from './constants';
import { type Theme } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
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
  
  const handleTagClick = (tag: string) => {
    setSelectedTags(prevTags => {
        if (prevTags.includes(tag)) {
            return prevTags.filter(t => t !== tag);
        } else {
            return [...prevTags, tag];
        }
    });
  };

  const allTags = useMemo(() => {
    const tags = new Set<string>();
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

    // Start with the original data
    let resources = RESOURCES_DATA;

    // Filter by selected tags first
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

    // Then, filter by the search term
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
    <div className="bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-gray-100 min-h-screen font-sans">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="container mx-auto px-4 py-8">
        <Sidebar data={RESOURCES_DATA} isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="min-w-0">
            <Search 
                allTags={allTags}
                selectedTags={selectedTags}
                onTagClick={handleTagClick}
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
            />
            {filteredResources.map((category) => (
              <ResourceSection 
                key={category.id} 
                category={category}
                selectedTags={selectedTags}
                onTagClick={handleTagClick}
              />
            ))}
        </main>
      </div>
      <Footer />
      <FloatingTocButton toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
    </div>
  );
};

export default App;