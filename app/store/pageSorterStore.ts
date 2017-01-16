import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core';

import { Page } from '../models/Page';
import { Bucket } from '../models/Bucket';

import { pagesReducer } from '../reducers/pagesReducer';
import { selectedPageReducer } from '../reducers/selectedPageReducer';
import { bucketsReducer } from '../reducers/bucketsReducer';
import { pageSorterStoreReducer } from '../reducers/pageSorterStoreReducer';

export interface PageSorterStore {
    pages: Page[];
    selectedPage: Page;
    buckets: Bucket[];
}

export const rootReducer = combineReducers({
    pages: pagesReducer,
    selectedPage: selectedPageReducer,
    buckets: bucketsReducer
});