import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Page } from '../../models/Page';
import { Pile } from '../../models/Pile';

@Component({
	selector: 'pile',
	templateUrl: 'app/components/pile/pile.component.html',
	styleUrls: ['app/components/pile/pile.component.less'],
})
export class PileComponent {
	@Input() pile: Pile;
}