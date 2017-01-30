import { ActionReducer, Action } from '@ngrx/store';
import { Page } from '../models/Page';

export const pagesReducer: ActionReducer<Page[]> = (state: Page[], action: Action) => {
    switch (action.type) {
        case 'UPLOAD_PAGES':
            return action.payload;
        case 'ADD_PAGE':
            return [...state, action.payload];
        case 'DELETE_PAGE':
            return state.filter(p => p.id !== action.payload.id);
        case 'SELECT_PILE':
            return state.filter(p => p.id !== action.payload.page.id);
        default:
            return state;
    }
}