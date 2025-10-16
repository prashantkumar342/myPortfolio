import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToSection } from '../utils';

export const useNavigation = () => {
  const location = useLocation();

  const handleNavigation = useCallback((item) => {
    if (item.id === "contact") {
      // Navigate to contact page
      window.location.href = "/contact";
    } else {
      // Scroll to section on home page
      if (location.pathname !== "/") {
        window.location.href = `/#${item.id}`;
      } else {
        scrollToSection(item.id);
      }
    }
  }, [location.pathname]);

  return { handleNavigation, location };
};
