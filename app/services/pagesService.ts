import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { PageSorterStore } from '../store/pageSorterStore';
import { Page } from '../models/Page';

@Injectable()
export class PagesService {
    pages: Observable<Page[]>;
    
    constructor(private store: Store<PageSorterStore>) {
        this.pages = store.select('pages');
    }
}