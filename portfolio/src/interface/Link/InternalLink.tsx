import type BaseLink from "./BaseLink";

export default interface InternalLink extends BaseLink {
    type?: 'internalLink';
    path: string;
    id?: string;
}