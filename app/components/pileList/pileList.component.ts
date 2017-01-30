import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pile } from '../../models/Pile';

@Component({
	selector: 'pileList',
	templateUrl: 'app/components/pileList/pileList.component.html'
})
export class PileListComponent {
    @Input() piles: Pile[];
	@Output() selectPile = new EventEmitter();
}