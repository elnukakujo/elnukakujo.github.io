import SimpleCard from "./SimpleCard";
import type Card from "../../../interface/Card";
import type { ReactNode } from "react";

type BubbleCard = Card & {
  backCard?: ReactNode;
};

export default function BubbleCard({ children, size, header, className, backCard }: BubbleCard) {
  return (
    <SimpleCard size={size} header={header} className={`rounded-full ${backCard ? 'hover:rounded:xl' : ''} ${className}`}>
        <div className={`
            flex flex-col gap-[0.75rem] items-center justify-center
            transition-all duration-300
            ${backCard ? 'opacity-0 lg:opacity-100 lg:group-hover:opacity-0' : ''}
        `}>
            {children}
        </div>

        {/* Back Card - Only shows if backCard exists */}
        {backCard && (
            <div className="
            p-[1.5rem] 
            opacity-100 lg:opacity-0
            lg:group-hover:opacity-100
            scale-100 lg:scale-90
            lg:group-hover:scale-100
            transition-all duration-300
            absolute inset-0 flex flex-col gap-[0.75rem] items-center justify-center
            ">
            {backCard}
        </div>
        )}
    </SimpleCard>
  );
}