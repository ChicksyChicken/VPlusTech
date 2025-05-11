import { useState, useEffect } from 'react';

export const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  // Close menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  return { isOpen, toggle, close };
};
