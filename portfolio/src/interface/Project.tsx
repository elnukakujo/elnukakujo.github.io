import Image from "./Image";
import InternalLink from "./Link/InternalLink";
import ExternalLink from "./Link/ExternalLink";
import Company from "./Organization/Company";
import Paragraph from "./Paragraph";
import Video from "./Video";

export default interface Project {
    type?: 'project';
    id: string;
    title: string;
    company?: Company[];
    date?: string;
    status?: 0 | 1 | 2;
    externalLink?: InternalLink[] | ExternalLink[];
    skills_id?: string[];
    summary: string;
    description: Paragraph[];
    images?: Image[];
    videos?: Video[];
    featured?: boolean;
}