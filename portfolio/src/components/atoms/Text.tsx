import type Text from "../../interface/Text";

export default function Text({ text, type, className, onClick }: Text) {
    className += " text-wrap";
    switch (type) {
        case 'header':
            return <h1 className={className} onClick={onClick}>{text}</h1>;
        case 'subheader':
            return <h2 className={className} onClick={onClick}>{text}</h2>;
        case 'subsubheader':
            return <h3 className={className} onClick={onClick}>{text}</h3>;
        case 'text':
            return <p className={className} onClick={onClick}>{text}</p>;
        default:
            return <p className={className} onClick={onClick}>{text}</p>;
    }
}