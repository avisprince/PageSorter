import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { PageSorterStore } from '../store/pageSorterStore';
import { Page } from '../models/Page';

@Injectable()
export class PagesService {
    pages: Observable<Array<Page>>;
    
    constructor(private store: Store<PageSorterStore>) {
        this.pages = store.select('pages');
    }

    loadPages() {
        let initialPages: Page[] = [
            { id: 0 },
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
        ];

        //this.store.dispatch({ type: 'UPLOAD_PAGES', payload: initialPages });
        this.store.dispatch({ type: 'SELECT_PAGE', payload: initialPages[0] });
    }
}