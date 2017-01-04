import { ActionReducer, Action } from '@ngrx/store';
import { Page } from '../models/Page';

export const pagesReducer = (state: Page[], action: Action) => {
    switch (action.type) {
        case 'UPLOAD_PAGES':
            return action.payload;
        default:
            return state;
    }
}