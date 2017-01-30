import { ActionReducer, Action } from '@ngrx/store';

import { PageSorterStore } from '../store/pageSorterStore';
import { Page } from '../models/Page';
import { Pile } from '../models/Pile';

import { rootReducer } from '../store/pageSorterStore'
import { pagesReducer } from '../reducers/pagesReducer';
import { selectedPageReducer } from '../reducers/selectedPageReducer';
import { pilesReducer } from '../reducers/pilesReducer';

const initialState: PageSorterStore = {
    pages: [],
    selectedPage: null,
    piles: []
}

export const pageSorterStoreReducer: ActionReducer<PageSorterStore> = (state: PageSorterStore = initialState, action: Action) => {
    switch (action.type) {
        case "LOAD_PDF":
            return Object.assign({}, state, {
                pages: action.payload,
                selectedPage: action.payload[0],
                piles: []
            });
        case "SELECT_PILE":
            return Object.assign({}, state, {
                pages: pagesReducer(state.pages, { type: 'DELETE_PAGE', payload: state.selectedPage }),
                selectedPage: state.pages[0],
                piles: pilesReducer(state.piles, { type: 'SELECT_PILE', payload: { pile: action.payload, page: state.selectedPage }})
            });
        case "SELECT_PAGE":
            return Object.assign({}, state, {
                selectedPage: action.payload
            });
        case "ADD_PILE":
            return Object.assign({}, state, {
                piles: pilesReducer(state.piles, { type: 'ADD_PILE' })
            });
        default:
            return state;
    }
}
