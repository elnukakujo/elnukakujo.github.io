import { useState } from 'react';

function CtaBubble({ size, frontCard, backCard }) {
  const hasBackCard = !!backCard; // Check if backCard exists

  return (
    <div 
      className={`
        ${size === 'main' ? 'size-[300px] shadow-xl' : 'size-[186px] shadow-lg'} 
        bg-secondary rounded-xl lg:rounded-full 
        flex flex-col gap-[10px] items-center justify-center 
        relative ${hasBackCard ? 'group cursor-pointer hover:rounded-xl' : ''}
      `}
    >
      {/* Front Card - Always visible if no backCard, hides on hover when backCard exists */}
      <div className={`
        flex flex-col gap-[10px] items-center justify-center
        transition-all duration-300
        ${hasBackCard ? 'opacity-0 lg:opacity-100 lg:group-hover:opacity-0' : ''}
      `}>
        {frontCard}
      </div>

      {/* Back Card - Only shows if backCard exists */}
      {hasBackCard && (
        <div className="
          opacity-100 lg:opacity-0
          lg:group-hover:opacity-100
          scale-100 lg:scale-90
          lg:group-hover:scale-100
          transition-all duration-300
          absolute inset-0 flex flex-col gap-[10px] items-center justify-center
        ">
          {backCard}
        </div>
      )}
    </div>
  );
}

export default CtaBubble;