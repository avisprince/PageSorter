import { ActionReducer, Action } from '@ngrx/store';
import { Page } from '../models/Page';
import { Bucket } from '../models/Bucket';

import { bucketReducer } from './bucketReducer';

const initialBuckets: Bucket[] = [
    { id: 0, pages: [] }
];

export const bucketsReducer: ActionReducer<Bucket[]> = (state: Bucket[] = initialBuckets, action: Action) => {
    switch (action.type) {
        case "SELECT_BUCKET":
            let index = state.findIndex(b => b.id === action.payload.bucket.id);
            return [
                ...state.slice(0, index),
                bucketReducer(state[index], {type: "ADD_PAGE", payload: action.payload.page}),
                ...state.slice(index+1)
            ];
        default:
            return state;
    }
}
