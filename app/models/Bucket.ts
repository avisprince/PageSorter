import { Page } from './Page';

export interface Bucket {
    id: number;
    name: string;
    pages: Page[];
}