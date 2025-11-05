

import React from 'react';
import ThemeToggle from './ThemeToggle';
import { Icon } from './icons';
import { type Theme } from '../types';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  return (
    <header className="bg-white/70 dark:bg-dark-card/70 backdrop-blur-lg sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-4">
            <Icon name="Shield" className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            Privacy Picks
            </h1>
        </div>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </header>
  );
};

export default Navbar;