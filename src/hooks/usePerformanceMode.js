import { useState, useEffect } from 'react';

export const usePerformanceMode = () => {
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    // Check for low-end device indicators
    const checkPerformance = () => {
      const isLowEnd = 
        navigator.hardwareConcurrency <= 2 || // Low CPU cores
        navigator.deviceMemory <= 2 || // Low RAM (if available)
        window.innerWidth < 768; // Mobile device
      
      setIsLowPerformance(isLowEnd);
    };

    checkPerformance();
    
    // Re-check on resize
    window.addEventListener('resize', checkPerformance);
    return () => window.removeEventListener('resize', checkPerformance);
  }, []);

  return isLowPerformance;
};
