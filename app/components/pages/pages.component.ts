import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PageSorterStore } from '../../store/pageSorterStore';
import { Page } from '../../models/Page';

@Component({
	selector: 'pages',
	templateUrl: 'app/components/pages/pages.component.html'
})
export class PagesComponent {
	@Input() pages: Page[];
    @Input() selectedPage: Page;
	@Output() selectPage = new EventEmitter();
}