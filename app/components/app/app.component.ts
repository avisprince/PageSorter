import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { PageSorterStore } from '../../store/pageSorterStore';
import { PagesService } from '../../services/pagesService';
import { Page } from '../../models/Page';
import { Pile } from '../../models/Pile';

import { PagesComponent } from '../pages/pages.component';
import { SelectedPageComponent } from '../selectedPage/selectedPage.component';
import { PileComponent } from '../pile/pile.component';
import { PileListComponent } from '../pileList/pileList.component';

@Component({
	selector: 'my-app',
	templateUrl: 'app/components/app/app.component.html',
	styleUrls: ['app/components/app/app.component.less'],
	providers: [PagesService],
})
export class AppComponent {
	private pages: Observable<Page[]>;
	private selectedPage: Observable<Page>;
	private piles: Observable<Pile[]>;

	constructor(private pagesService: PagesService, private store: Store<PageSorterStore>) {
		this.pages = store.select('pages');
		this.piles = store.select('piles');
		this.selectedPage = store.select('selectedPage');

		this.getThumbnails();
	}

	selectPage(page: Page) {
		this.store.dispatch({ type: 'SELECT_PAGE', payload: page });
	}

	selectPile(pile: Pile) {
		this.store.dispatch({ type: "SELECT_PILE", payload: pile });
	}

	addPile() {
		this.store.dispatch({ type: "ADD_PILE"});
	}

	getThumbnails() {
		this.pagesService.getPdfImages();
	}
}
