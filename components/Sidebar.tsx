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
      {/* Sidebar - Off-canvas for all screen sizes */}
      <div
        className={`fixed inset-0 z-30 bg-black/50 transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleSidebar}
        aria-hidden="true"
      />
      <aside
        className={`fixed top-16 right-0 bottom-0 z-40 w-72 max-w-[80vw] bg-white dark:bg-dark-card transform transition-transform duration-300 ease-in-out rounded-tl-2xl rounded-bl-2xl shadow-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 h-full overflow-y-auto hide-scrollbar">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Menu</h2>
            <button onClick={toggleSidebar} className="p-1" aria-label="Close menu">
              <Icon name="X" size={20} />
            </button>
          </div>
          <TableOfContents data={data} onLinkClick={handleLinkClick} />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;