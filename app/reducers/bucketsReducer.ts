import { ActionReducer, Action } from '@ngrx/store';
import { Page } from '../models/Page';
import { Bucket } from '../models/Bucket';

import { pagesReducer } from './pagesReducer';

const initialBuckets: Bucket[] = [
    { id: 0, pages: [], name: "" }
];

export const bucketsReducer: ActionReducer<Bucket[]> = (state: Bucket[], action: Action) => {
    switch (action.type) {
        case "SELECT_BUCKET":
            let index = state.findIndex(b => b.id === action.payload.bucket.id);
            state[index].pages = pagesReducer(state[index].pages, {type: "ADD_PAGE", payload: action.payload.page});
            
            return [
                ...state.slice(0, index),
                state[index],
                ...state.slice(index+1)
            ];
        case "ADD_BUCKET":
            return state.concat([{ id: 1, pages: [], name: "" }]);
        default:
            return state;
    }
}
