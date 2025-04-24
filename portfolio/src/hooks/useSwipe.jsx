import { useEffect, useRef } from 'react';

export function useSwipe(onSwipe) {
  const ref = useRef(null);
  const startX = useRef(0);
  const startY = useRef(0);
  const dragging = useRef(false);
  const threshold = 30;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const onTouchStart = (e) => {
      startX.current = e.touches[0].clientX;
      startY.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e) => {
      const dx = e.changedTouches[0].clientX - startX.current;
      const dy = e.changedTouches[0].clientY - startY.current;

      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > threshold) {
        e.stopPropagation();
        e.preventDefault(); // Only if horizontal swipe
        onSwipe(dx > 0 ? 'right' : 'left', e);
      }
    };

    const onMouseDown = (e) => {
      dragging.current = true;
      startX.current = e.clientX;
    };

    const onMouseUp = (e) => {
      if (!dragging.current) return;
      dragging.current = false;

      const dx = e.clientX - startX.current;
      if (Math.abs(dx) > threshold) {
        e.stopPropagation();
        onSwipe(dx > 0 ? 'right' : 'left', e);
      }
    };

    node.addEventListener('touchstart', onTouchStart, { passive: true });
    node.addEventListener('touchend', onTouchEnd, { passive: false }); // must be false to allow preventDefault
    node.addEventListener('mousedown', onMouseDown);
    node.addEventListener('mouseup', onMouseUp);

    return () => {
      node.removeEventListener('touchstart', onTouchStart);
      node.removeEventListener('touchend', onTouchEnd);
      node.removeEventListener('mousedown', onMouseDown);
      node.removeEventListener('mouseup', onMouseUp);
    };
  }, [onSwipe]);

  return ref;
}