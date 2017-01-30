import { ActionReducer, Action } from '@ngrx/store';
import { Page } from '../models/Page';
import { Pile } from '../models/Pile';

import { pagesReducer } from './pagesReducer';

export const pilesReducer: ActionReducer<Pile[]> = (state: Pile[], action: Action) => {
    switch (action.type) {
        case "SELECT_PILE":
            let index = state.findIndex(b => b.id === action.payload.pile.id);
            state[index].pages = pagesReducer(state[index].pages, {type: "ADD_PAGE", payload: action.payload.page});
            
            return [
                ...state.slice(0, index),
                state[index],
                ...state.slice(index+1)
            ];
        case "ADD_PILE":
            return state.concat([{ id: 1, pages: [], name: "" }]);
        default:
            return state;
    }
}
