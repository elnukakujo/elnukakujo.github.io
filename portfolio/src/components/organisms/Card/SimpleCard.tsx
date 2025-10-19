import type Card from "../../../interface/Card";
import Header from "../../molecules/Header";
import { motion } from "motion/react"

export default function SimpleCard({ children, size, layer, header, className }: Card) {
    return (
        <motion.article whileInView={{opacity: 1}} className={`opacity-0 ${layer ? `z-${layer}` : ''} ${layer && layer%2 === 0 ? 'bg-primary' : 'bg-secondary'} card card-${size} ${className ? className : ''} w-full`}>
            {header && (
                <Header header={header} />
            )}
            {children}
        </motion.article>
    );
}