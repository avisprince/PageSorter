import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { PageSorterStore } from '../../store/pageSorterStore';
import { PagesService } from '../../services/pagesService';
import { Page } from '../../models/Page';
import { Bucket } from '../../models/Bucket';

import { PagesComponent } from '../pages/pages.component';
import { BucketComponent } from '../bucket/bucket.component';

@Component({
	selector: 'my-app',
	templateUrl: 'app/components/app/app.component.html',
	styleUrls: ['app/components/app/app.component.less'],
	providers: [PagesService],
})
export class AppComponent {
	private pages: Observable<Page[]>;
	private selectedPage: Observable<Page>;
	private buckets: Observable<Bucket[]>;

	constructor(private pagesService: PagesService, private store: Store<PageSorterStore>) {
		this.pages = pagesService.pages;
		this.buckets = store.select('buckets');
		this.selectedPage = store.select('selectedPage');
	}

	selectPage(page: Page) {
		this.store.dispatch({ type: 'SELECT_PAGE', payload: page });
	}

	selectBucket(bucket: Bucket) {
		this.store.dispatch({ type: "SELECT_BUCKET", payload: { bucket: bucket, page: this.store.select('selectedPage') }});
	}
}
