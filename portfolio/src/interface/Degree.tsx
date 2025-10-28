import type University from "./Organization/University";

export default interface Degree {
    type?: 'degree';
    status?: 0 | 1 | 2;
    id: string,
    name: string,
    date: string,
    university: University[];
    courses?: string[]
}