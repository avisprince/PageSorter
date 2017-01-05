import { ActionReducer, Action } from '@ngrx/store';
import { Page } from '../models/Page';
import { Bucket } from '../models/Bucket';

const initialBuckets: Bucket[] = [
    { id: 0, pages: [] }
];

export const bucketsReducer: ActionReducer<Bucket[]> = (state: Bucket[] = initialBuckets, action: Action) => {
    switch (action.type) {
        case 'SELECT_BUCKET':
            return action.payload;
        default:
            return state;
    }
}