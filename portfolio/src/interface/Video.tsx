export default interface Video {
    type?: 'video';
    url: string;
    caption?: string;
    size: 'small' | 'medium' | 'large';
    altText?: string;
    className?: string;
}