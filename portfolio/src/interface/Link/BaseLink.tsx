import Text from "../Text";

export default interface BaseLink {
    text?: string | Text;
    imageUrl?: string;
    logoType?: 'github' | 'google-scholar' | 'website' | 'email' | 'linkedin';
    className?: string;
}