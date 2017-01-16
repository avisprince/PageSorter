import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Page } from '../../models/Page';

@Component({
	selector: 'selectedPage',
	templateUrl: 'app/components/selectedPage/selectedPage.component.html',
	styleUrls: ['app/components/selectedPage/selectedPage.component.less']
})
export class SelectedPageComponent {
    @Input() selectedPage: Page;
}