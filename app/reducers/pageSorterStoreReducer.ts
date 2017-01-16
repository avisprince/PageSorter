import { ActionReducer, Action } from '@ngrx/store';

import { PageSorterStore } from '../store/pageSorterStore';
import { Page } from '../models/Page';
import { Bucket } from '../models/Bucket';

import { rootReducer } from '../store/pageSorterStore'
import { pagesReducer } from '../reducers/pagesReducer';
import { selectedPageReducer } from '../reducers/selectedPageReducer';
import { bucketsReducer } from '../reducers/bucketsReducer';

const initialPages: Page[] = [
    { id: 0, initialIndex: 0 },
    { id: 1, initialIndex: 1 },
    { id: 2, initialIndex: 2 },
    { id: 3, initialIndex: 3 },
    { id: 4, initialIndex: 4 },
];

const initialBuckets: Bucket[] = [
    { id: 0, pages: [] }
];

const initialState = {
    pages: initialPages,
    selectedPage: initialPages[0],
    buckets: initialBuckets
}

export const pageSorterStoreReducer: ActionReducer<PageSorterStore> = (state: PageSorterStore = initialState, action: Action) => {
    switch (action.type) {
        case "SELECT_BUCKET":
            return Object.assign({}, state, {
                pages: pagesReducer(state.pages, { type: 'DELETE_PAGE', payload: state.selectedPage }),
                selectedPage: state.pages[0],
                buckets: bucketsReducer(state.buckets, { type: 'SELECT_BUCKET', payload: { bucket: action.payload, page: state.selectedPage }})
            });
        case "SELECT_PAGE":
            return Object.assign({}, state, {
                selectedPage: action.payload
            });
        case "ADD_BUCKET":
            return Object.assign({}, state, {
                buckets: bucketsReducer(state.buckets, { type: 'ADD_BUCKET' })
            });
        default:
            return state;
    }
}
