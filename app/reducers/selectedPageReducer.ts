import { ActionReducer, Action } from '@ngrx/store';
import { Page } from '../models/Page';

const initialPage = {
    id: 0, 
    initialIndex: 0
}

export const selectedPageReducer: ActionReducer<Page> = (state: Page, action: Action) => {
    switch (action.type) {
        case 'SELECT_PAGE':
            return action.payload;
        default:
            return state;
    }
}