import type Text from "../../interface/Text";

export default function Text({ text, type, className }: Text) {
    switch (type) {
        case 'header':
            return <h1 className={className}>{text}</h1>;
        case 'subheader':
            return <h2 className={className}>{text}</h2>;
        case 'subsubheader':
            return <h3 className={className}>{text}</h3>;
        case 'text':
            return <p className={className}>{text}</p>;
        default:
            return <p className={className}>{text}</p>;
    }
}