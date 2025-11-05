

import React from 'react';
import { Icon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-dark-card shadow-inner mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} <a href="https://privacypicks.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Privacy Picks</a>. All rights reserved.</p>
        <p className="text-sm mt-2">Your guide to a more private digital life.</p>
         <div className="flex justify-center gap-4 mt-4">
            <a href="https://github.com/privacypicks" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary">
                <Icon name="GitHub" size={20} />
            </a>
            <a href="https://x.com/privacypicks" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-primary">
                <Icon name="Twitter" size={20} />
            </a>
         </div>
      </div>
    </footer>
  );
};

export default Footer;