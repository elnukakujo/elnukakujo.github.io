import ExternalLink from './Link/ExternalLink';
import Company from './Company';

export default interface Header {
    type?: 'header';
    title: string;
    company?: Company[];
    date?: string;
    status?: 0 | 1 | 2;
    externalLinks?: ExternalLink[];
    className?: string;
}