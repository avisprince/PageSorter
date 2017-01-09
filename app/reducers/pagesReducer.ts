import { ActionReducer, Action } from '@ngrx/store';
import { Page } from '../models/Page';

const initialPages: Page[] = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
];

export const pagesReducer: ActionReducer<Page[]> = (state: Page[] = initialPages, action: Action) => {
    switch (action.type) {
        case 'UPLOAD_PAGES':
            return action.payload;
        case 'ADD_PAGE':
            return [...state, action.payload];
        case 'DELETE_PAGE':
            return state.filter(p => p.id !== action.payload.id);
        default:
            return state;
    }
}