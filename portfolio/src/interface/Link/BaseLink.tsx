export default interface BaseLink {
    text?: string;
    imageUrl?: string;
    logoType?: 'github' | 'google-scholar' | 'website' | 'email' | 'linkedin';
    className?: string;
}