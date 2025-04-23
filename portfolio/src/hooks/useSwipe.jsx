import { useEffect, useRef } from 'react';

export function useSwipe(onSwipe) {
  const ref = useRef(null);
  const startXRef = useRef(0);
  const isDraggingRef = useRef(false);
  const threshold = 30;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Touch Handlers
    const handleTouchStart = (e) => {
      e.stopPropagation();
      startXRef.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      e.stopPropagation();
      const dx = e.changedTouches[0].clientX - startXRef.current;
      if (Math.abs(dx) > threshold) {
        onSwipe(dx > 0 ? 'right' : 'left');
      }
    };

    // Mouse Handlers
    const handleMouseDown = (e) => {
      e.preventDefault();
      isDraggingRef.current = true;
      startXRef.current = e.clientX;
    };

    const handleMouseUp = (e) => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;

      // Only count swipe if mouseup happens on the same element
      if (!node.contains(e.target)) return;

      const dx = e.clientX - startXRef.current;
      if (Math.abs(dx) > threshold) {
        onSwipe(dx > 0 ? 'right' : 'left');
      }
    };

    node.addEventListener('touchstart', handleTouchStart, { passive: true });
    node.addEventListener('touchend', handleTouchEnd, { passive: true });
    node.addEventListener('mousedown', handleMouseDown);
    node.addEventListener('mouseup', handleMouseUp);

    return () => {
      node.removeEventListener('touchstart', handleTouchStart);
      node.removeEventListener('touchend', handleTouchEnd);
      node.removeEventListener('mousedown', handleMouseDown);
      node.removeEventListener('mouseup', handleMouseUp);
    };
  }, [onSwipe]);

  return ref;
}