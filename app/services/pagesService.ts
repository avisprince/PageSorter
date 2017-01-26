import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { PageSorterStore } from '../store/pageSorterStore';
import { Page } from '../models/Page';

@Injectable()
export class PagesService {
    pages: Observable<Page[]>;
    
    constructor(private store: Store<PageSorterStore>, private http: Http) {
        this.pages = store.select('pages');
    }

    getPdfImage(): Promise<string[]> {
        return this.http.get("api/pdf")
            .toPromise()
            .then(r => r.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}