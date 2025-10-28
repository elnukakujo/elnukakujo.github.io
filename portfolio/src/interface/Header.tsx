import City from './City';
import ExternalLink from './Link/ExternalLink';
import Company from './Organization/Company';
import University from './Organization/University';

export default interface Header {
    type?: 'header';
    title?: string;
    organization?: (Company | University)[];
    location?: City[];
    date?: string;
    status?: 0 | 1 | 2;
    externalLinks?: ExternalLink[];
    className?: string;
}