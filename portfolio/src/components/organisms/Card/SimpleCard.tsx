import type Card from "../../../interface/Card";
import Header from "../../molecules/Header";

export default function SimpleCard({ children, size, layer, header, className, id }: Card) {
    return (
        <article
            className={`${className ? className : ''} rounded-3xl max-w-full mx-auto flex flex-col justify-between items-center ${layer ? `z-${layer}` : ''} ${layer && layer%2 === 0 ? 'bg-primary' : 'bg-secondary'} card-${size}`}
            id={id ? id : ""}
        >
            {header && (
                <Header header={header} />
            )}
            {children}
        </article>
    );
}
