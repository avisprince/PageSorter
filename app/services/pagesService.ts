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

    getName(): Promise<string> {
        let headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
        let options = new RequestOptions({ headers: headers });

        return this.http.get("http://localhost:65115/api/name", options)
            .toPromise()
            .then(r => r.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}