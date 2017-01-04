import { Action } from '@ngrx/store';
import { Page } from '../models/Page';

export const selectedPageReducer = (state: Page, action: Action) => {
    switch (action.type) {
        case 'SELECT_PAGE':
            return action.payload;
        default:
            return state;
    }
}