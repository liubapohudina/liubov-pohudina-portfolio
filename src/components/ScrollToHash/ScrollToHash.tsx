import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const id = location.hash.slice(1);

    const timer = window.setTimeout(() => {
      const element = document.getElementById(id);

      if (!element) return;

      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 100);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return null;
};
