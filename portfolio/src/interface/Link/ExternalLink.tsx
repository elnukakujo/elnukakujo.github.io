import type BaseLink from "./BaseLink";

export default interface ExternalLink extends BaseLink {
    type?: 'externalLink';
    url: string;
}