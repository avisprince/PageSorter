import {Page} from '../models/Page';
import {Bucket} from '../models/Bucket';

export interface PageSorterStore {
    pages: Page[];
    selectedPage: Page;
    buckets: Bucket[];
}