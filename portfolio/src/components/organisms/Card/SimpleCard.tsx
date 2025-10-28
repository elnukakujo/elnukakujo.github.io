import type Card from "../../../interface/Card";
import Header from "../../molecules/Header";
import { motion } from "motion/react"

export default function SimpleCard({ children, size, layer, header, className, id }: Card) {
    return (
        <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.3,                               // 300 ms = 0.3s to match duration-300
                ease: [0.4, 0, 0.2, 1],                      // matches Tailwind ease-in-out
            }}
            className={`${className ? className : ''} rounded-3xl max-w-full mx-auto flex flex-col justify-between items-center ${layer ? `z-${layer}` : ''} ${layer && layer%2 === 0 ? 'bg-primary' : 'bg-secondary'} card-${size}`}
            id={id ? id : ""}    
        >
            {header && (
                <Header header={header} />
            )}
            {children}
        </motion.article>
    );
}