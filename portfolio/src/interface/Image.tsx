export default interface Image {
    type?: 'image';
    imageUrl: string;
    caption?: string;
    size: 'small' | 'medium' | 'large';
    altText?: string;
    className?: string;
}