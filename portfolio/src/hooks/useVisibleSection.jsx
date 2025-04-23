import { useState, useEffect } from 'react';

function useVisibleSection(sectionIds) {
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    let observer;
  
    const setupObserver = () => {
      const sectionMap = new Map();
  
      observer = new IntersectionObserver(handleIntersect, {
        threshold: 0.1,
      });
  
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
          sectionMap.set(id, false);
        } else {
          console.warn(`Element with id ${id} not found`);
        }
      });
  
      return () => {
        observer.disconnect();
        sectionMap.clear();
      };
    };
  
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
  
        setVisibleSections((prev) => {
          const next = new Set(prev);
          entry.isIntersecting ? next.add(id) : next.delete(id);
          return next;
        });
      });
    };
  
    const waitForElements = () => {
      const missingIds = sectionIds.filter((id) => !document.getElementById(id));
      if (missingIds.length > 0) {
        requestAnimationFrame(waitForElements); // try again next frame
      } else {
        cleanup = setupObserver();
      }
    };
  
    let cleanup = () => {};
    waitForElements();
  
    return () => cleanup();
  }, [sectionIds]);

  return visibleSections;
};

export default useVisibleSection;