import {Page} from '../models/Page';

export interface PageSorterStore {
    pages: Page[];
    selectedPage: Page;
}