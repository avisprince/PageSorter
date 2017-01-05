import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { PageSorterStore } from '../../store/pageSorterStore';
import { PagesService } from '../../services/pagesService';
import { Page } from '../../models/Page';

import { PagesComponent } from '../pages/pages.component';

@Component({
	selector: 'my-app',
	templateUrl: 'app/components/app/app.component.html',
	styleUrls: ['app/components/app/app.component.less'],
	providers: [PagesService],
})
export class AppComponent {
	pages: Observable<Page[]>;
	selectedPage: Observable<Page>;

	constructor(private pagesService: PagesService, private store: Store<PageSorterStore>) {
		this.pages = pagesService.pages;
		this.selectedPage = store.select('selectedPage');
	}

	selectPage(page: Page) {
		this.store.dispatch({ type: 'SELECT_PAGE', payload: page});
	}
}
