import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { PageSorterStore } from '../store/pageSorterStore';
import { Page, PageBuilder } from '../models/Page';

@Injectable()
export class PagesService {
    constructor(private store: Store<PageSorterStore>, private http: Http, private pageBuilder: PageBuilder) { }

    getPdfImages(): Promise<void> {
        return this.http.get("http://localhost:65115/api/pdf")
            .toPromise()
            .then(r => {
                let images = r.json();
                let pageList: Page[] = [];

                for (var i = 0; i < images.length; i++) {
                    pageList[i] = this.pageBuilder.buildPage(i, images[i]);
                }

                this.store.dispatch({ type: "LOAD_PDF", payload: pageList });

                Promise.resolve();
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}