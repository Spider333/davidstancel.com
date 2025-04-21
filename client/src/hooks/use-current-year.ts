import { useState, useEffect } from 'react';

export function useCurrentYear(): number {
  const [year, setYear] = useState(() => new Date().getFullYear());
  
  useEffect(() => {
    // Update the year if the component stays mounted past new year
    const interval = setInterval(() => {
      const currentYear = new Date().getFullYear();
      if (currentYear !== year) {
        setYear(currentYear);
      }
    }, 1000 * 60 * 60); // Check every hour
    
    return () => clearInterval(interval);
  }, [year]);
  
  return year;
}
