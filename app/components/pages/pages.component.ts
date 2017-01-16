import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Page } from '../../models/Page';

@Component({
	selector: 'pages',
	templateUrl: 'app/components/pages/pages.component.html',
	styleUrls: ['app/components/pages/pages.component.less']
})
export class PagesComponent {
	@Input() pages: Page[];
	@Output() selectPage = new EventEmitter();
}