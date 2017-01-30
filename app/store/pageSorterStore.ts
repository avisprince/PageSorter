import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core';

import { Page } from '../models/Page';
import { Pile } from '../models/Pile';

import { pagesReducer } from '../reducers/pagesReducer';
import { selectedPageReducer } from '../reducers/selectedPageReducer';
import { pilesReducer } from '../reducers/pilesReducer';
import { pageSorterStoreReducer } from '../reducers/pageSorterStoreReducer';

export interface PageSorterStore {
    pages: Page[];
    selectedPage: Page;
    piles: Pile[];
}

export const rootReducer = combineReducers({
    pages: pagesReducer,
    selectedPage: selectedPageReducer,
    piles: pilesReducer
});