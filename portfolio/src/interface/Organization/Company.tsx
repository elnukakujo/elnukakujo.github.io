import BaseOrganization from "./BaseOrganization";

export default interface Company extends BaseOrganization {
    type?: 'company';
}