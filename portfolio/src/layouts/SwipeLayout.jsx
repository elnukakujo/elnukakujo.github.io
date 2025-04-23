import { useState, Children, useCallback } from 'react';
import { useSwipe } from '../hooks/useSwipe';

function SwipeLayout ({ children }) {
    const validChildren = Children.toArray(children).flat().filter(child => child !== null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const itemCount = validChildren.length;

    const goToPrevious = () => {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
    };

    const goToNext = () => {
        setCurrentIndex(prev => Math.min(prev + 1, itemCount - 1));
    };

    const handleSwipe = useCallback((dir) => {
        if (dir === 'left') goToNext();
        if (dir === 'right') goToPrevious();
    }, [itemCount]);
    
    const swipeRef = useSwipe(handleSwipe);

    return (
        <section ref={swipeRef} className="swipe-layout flex flex-col gap-md">
            <div className={`relative flex justify-center`}>
                {currentIndex > 0 && 
                    <div className="absolute -left-[2rem] cursor-pointer opacity-50 scale-90 hover:opacity-75 z-0 transition-opacity duration-300" onClick={goToPrevious}>
                        {validChildren[currentIndex - 1]}
                    </div>
                }
                <div className="z-1">
                    {validChildren[currentIndex]}
                </div>
                {currentIndex < itemCount - 1 && 
                    <div className="cursor-pointer absolute -right-[2rem] opacity-50 scale-90 hover:opacity-75 z-0 transition-opacity duration-300" onClick={goToNext}>
                        {validChildren[currentIndex + 1]}
                    </div>
                }
            </div>
            { itemCount > 1 &&   
                <nav className='mx-auto flex flex-row gap-sm p-2 bg-secondary rounded-full'>
                    {Array.from({ length: itemCount }).map((_, i) => (
                        <button
                            key={i}
                            className={`cursor-pointer size-2.5 bg-text rounded-full ${currentIndex === i ? '' : 'opacity-50'} hover:opacity-100 transition-opacity duration-300`}
                            onClick={() => setCurrentIndex(i)}
                        />
                    ))}
                </nav>
            }
        </section>
    );
};

export default SwipeLayout;