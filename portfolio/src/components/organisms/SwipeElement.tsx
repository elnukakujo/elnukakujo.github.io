import { useState, Children, useCallback } from 'react';
import { useSwipe } from '../../hooks/useSwipe';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function SwipeElement({ children } : { children: React.ReactNode }) {
  const slides = Children.toArray(children).filter(Boolean);
  const [current, setCurrent] = useState(0);
  const maxIndex = slides.length - 1;

  const handleSwipe = useCallback(
    (dir: 'left' | 'right') => {
      if (dir === 'left' && current < maxIndex) setCurrent((i) => i + 1);
      if (dir === 'right' && current > 0) setCurrent((i) => i - 1);
    },
    [current, maxIndex]
  );
  const swipeRef = useSwipe(handleSwipe);

  return (
    <div ref={swipeRef} className="overflow-x-clip flex flex-col items-center gap-sm">
      <div className="relative flex flex-row gap-sm items-center shrink w-full min-w-xs">
        <button onClick={() => setCurrent((i) => Math.max(i - 1, 0))} className={`${current===0?'opacity-0 pointer-events-none':'opacity-60'} absolute left-2 cursor-pointer z-1 rounded-full size-12 flex items-center justify-center hover:opacity-90 hover:-translate-x-1 transition-transform duration-500 ease-in-out`}>
          <FontAwesomeIcon icon={faChevronLeft} className="text-text text-[1.5rem]" />
        </button>
        <div
          className="flex flex-row transition-transform duration-500 w-full"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="flex-shrink-0 w-full flex justify-center" onDragStart={(e) => e.preventDefault()} >
              <div className="max-w-fit select-none">{slide}</div>
            </div>
          ))}
        </div>
        <button onClick={() => setCurrent((i) => Math.min(i + 1, maxIndex))} className={`${current===maxIndex?'opacity-0 pointer-events-none':'opacity-60'} absolute right-2 cursor-pointer z-1 rounded-full size-12 flex items-center justify-center hover:opacity-90 hover:translate-x-1 transition-transform duration-500 ease-in-out`}>
          <FontAwesomeIcon icon={faChevronRight} className="text-text text-[1.5rem]" />
        </button>
      </div>

      {/* Optional dot nav */}
      {slides.length > 1 && (
        <div className="bg-secondary p-sm rounded-full flex flex-row gap-sm mt-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setCurrent(i);
              }}
              className={`size-2.5 rounded-full cursor-pointer ${
                i === current ? 'bg-text' : 'bg-text opacity-50 hover:opacity-100 transition-opacity duration-500 ease-in-out'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}