import SimpleCard from "./SimpleCard";
import type Card from "../../../interface/Card";
import type { ReactNode } from "react";

type BubbleCard = Card & {
  backCard?: ReactNode;
};

export default function BubbleCard({
  children,
  size,
  header,
  className = "",
  backCard,
}: BubbleCard) {
  const hasBack = !!backCard;

  return (
    <SimpleCard
      size={size}
      header={header}
      className={`relative group transition-slow 
        ${hasBack ? "rounded-xl lg:rounded-full hover:rounded-xl" : "rounded-full"} 
        aspect-square items-center justify-center
        ${className}`}
    >
      {/* Front side */}
      <div
        className={`
          flex flex-col gap-[0.75rem] items-center justify-center
          transition-slow
          ${hasBack ? "opacity-0 lg:opacity-100 group-hover:opacity-0" : "opacity-100"}
        `}
      >
        {children}
      </div>

      {/* Back side */}
      {hasBack && (
        <div
          className={`
            absolute inset-0 p-[1.5rem]
            flex flex-col gap-[0.75rem] items-center justify-center
            opacity-100 group-hover:opacity-100 lg:opacity-0
            scale-100
            transition-slow
          `}
        >
          {backCard}
        </div>
      )}
    </SimpleCard>
  );
}