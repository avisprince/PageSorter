import { ActionReducer, Action } from '@ngrx/store';
import { Page } from '../models/Page';
import { Bucket } from '../models/Bucket';

import { pagesReducer } from './pagesReducer';

export const bucketReducer: ActionReducer<Bucket> = (state: Bucket, action: Action) => {
    switch (action.type) {
        case "ADD_PAGE":
            state.pages = pagesReducer(state.pages, action);
            return state;
        default:
            return state;
    }
}
