export default interface Image {
    type?: 'image';
    url: string;
    caption?: string;
    size?: 'logo' | 'small' | 'medium' | 'large' | 'fit';
    altText?: string;
    className?: string;
    onClick?: () => void;
}