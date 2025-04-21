import { useState, Children } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function SwipeLayout ({ children }) {
    const validChildren = Children.toArray(children).flat().filter(child => child !== null);
    const [currentIndex, setCurrentIndex] = useState(0);
    console.log(validChildren);

    const itemCount = validChildren.length;

    const goToPrevious = () => {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
    };

    const goToNext = () => {
        setCurrentIndex(prev => Math.min(prev + 1, itemCount - 1));
    };

  return (
    <div className="swipe-layout flex flex-col gap-[20px]">
        <div className={`relative flex justify-center`}>
            {currentIndex > 0 && 
                <div className="absolute left-0 cursor-pointer opacity-50 scale-90 hover:opacity-75 z-0 transition-opacity duration-300" onClick={goToPrevious}>
                    {validChildren[currentIndex - 1]}
                </div>
            }
            <div className="items-center z-1">
                {validChildren[currentIndex]}
            </div>
            {currentIndex < itemCount - 1 && 
                <div className="cursor-pointer absolute right-0 opacity-50 scale-90 hover:opacity-75 z-0 transition-opacity duration-300" onClick={goToNext}>
                    {validChildren[currentIndex + 1]}
                </div>
            }
        </div>
        { itemCount > 1 &&   
            <nav className='flex justify-center'>
                <div className='w-[fit-content] flex flex-row gap-[5px]'>
                    {Array.from({ length: itemCount }).map((_, i) => (
                        <button
                            key={i}
                            className={`cursor-pointer size-[10px] ${currentIndex === i ? 'active' : 'opacity-50'} hover:opacity-100 transition-opacity duration-300`}
                            onClick={() => setCurrentIndex(i)}
                        >
                            <FontAwesomeIcon icon={faCircle} className='size-[10px]'/>
                        </button>
                    ))}
                </div>
            </nav>}
    </div>
  );
};

export default SwipeLayout;