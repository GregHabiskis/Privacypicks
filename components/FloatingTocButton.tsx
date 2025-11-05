// FIX: Implemented the FloatingTocButton component for mobile navigation.
import React, { useState, useEffect } from 'react';
import { Icon } from './icons';

interface FloatingTocButtonProps {
  toggleSidebar: () => void;
}

const FloatingTocButton: React.FC<FloatingTocButtonProps> = ({ toggleSidebar }) => {
  const [isVibrating, setIsVibrating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVibrating(true);
      setTimeout(() => {
        setIsVibrating(false);
      }, 300); // Duration of the vibration animation
    }, 5000); // Vibrate every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <button
      onClick={toggleSidebar}
      className={`lg:hidden fixed top-1/2 right-4 z-20 p-3 bg-primary text-white rounded-[15px] shadow-lg hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-gray-900 transform transition-transform ${
        isVibrating ? 'vibrate' : '-translate-y-1/2'
      }`}
      aria-label="Open table of contents"
    >
      <Icon name="Menu" size={24} />
    </button>
  );
};

export default FloatingTocButton;
