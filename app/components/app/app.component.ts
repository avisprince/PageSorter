import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { PageSorterStore } from '../../store/pageSorterStore';
import { PagesService } from '../../services/pagesService';
import { Page } from '../../models/Page';

@Component({
	selector: 'my-app',
	templateUrl: 'app/components/app/app.component.html',
	styleUrls: ['app/components/app/app.component.less'],
	providers: [PagesService]
})
export class AppComponent {
	private pages: Observable<Array<Page>>;
	private selectedPage: Observable<Page>;

	constructor(private pagesService: PagesService, private store: Store<PageSorterStore>) {
		this.pages = pagesService.pages;
		this.selectedPage = store.select<Page>('selectedPage');
		this.selectedPage.subscribe((p: Page) => console.log(p));

		pagesService.loadPages();
		debugger;
	}
}
