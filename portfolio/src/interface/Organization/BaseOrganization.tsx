import Image from "../Image";
import Video from "../Video";

export default interface BaseOrganization {
    id: string;
    name: string;
    logoUrl?: string;
    websiteUrl?: string;
    images?: Image[];
    videos?: Video[];
}