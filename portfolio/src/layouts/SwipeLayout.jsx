import { useState, Children, useCallback } from 'react';
import { useSwipe } from '../hooks/useSwipe';

function SwipeLayout({ children }) {
  const slides = Children.toArray(children).filter(Boolean);
  const [current, setCurrent] = useState(0);
  const maxIndex = slides.length - 1;

  const handleSwipe = useCallback(
    (dir) => {
      if (dir === 'left' && current < maxIndex) setCurrent((i) => i + 1);
      if (dir === 'right' && current > 0) setCurrent((i) => i - 1);
    },
    [current, maxIndex]
  );
  const swipeRef = useSwipe(handleSwipe);

  return (
    <div ref={swipeRef} className="overflow-hidden flex flex-col items-center gap-sm">
      <div
        className="flex flex-row transition-transform duration-300 w-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="flex-shrink-0 w-full flex justify-center" onDragStart={(e) => e.preventDefault()} >
            <div className="max-w-fit">{slide}</div>
          </div>
        ))}
      </div>

      {/* Optional dot nav */}
      {slides.length > 1 && (
        <div className="flex flex-row gap-sm mt-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setCurrent(i);
              }}
              className={`w-2 h-2 rounded-full cursor-pointer ${
                i === current ? 'bg-text' : 'bg-text opacity-50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SwipeLayout;