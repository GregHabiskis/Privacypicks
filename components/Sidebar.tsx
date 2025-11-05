// FIX: Implemented a responsive Sidebar component.
import React from 'react';
import { Icon } from './icons';
import { type ResourceCategory } from '../types';
import TableOfContents from './TableOfContents';

interface SidebarProps {
  data: ResourceCategory[];
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ data, isOpen, toggleSidebar }) => {
  const handleLinkClick = () => {
    // Only close sidebar if it's open (on mobile)
    if (isOpen) {
      toggleSidebar();
    }
  };

  return (
    <>
      {/* Mobile Sidebar - Off-canvas */}
      <div
        className={`fixed inset-0 z-30 bg-black/50 transition-opacity lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleSidebar}
        aria-hidden="true"
      />
      <aside
        className={`fixed top-0 left-0 z-40 h-full w-64 bg-white dark:bg-dark-card transform transition-transform lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 h-full overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Menu</h2>
            <button onClick={toggleSidebar} className="p-1" aria-label="Close menu">
              <Icon name="X" size={20} />
            </button>
          </div>
          <TableOfContents data={data} onLinkClick={handleLinkClick} />
        </div>
      </aside>

      {/* Desktop Sidebar - Static */}
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto pr-4">
          <h2 className="text-lg font-bold mb-4">Table of Contents</h2>
          <TableOfContents data={data} />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;