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
}

// import { Component } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs/Observable';
// import { INCREMENT, DECREMENT, RESET } from '../../reducers/counter';

// interface AppState {
//   counter: number;
// }

// @Component({
//     selector: 'my-app',
//     template: `
//         <button (click)="increment()">Increment</button>
//         <div>Current Count: {{ counter | async }}</div>
//         <button (click)="decrement()">Decrement</button>

//         <button (click)="reset()">Reset Counter</button>
//     `
// })
// export class AppComponent {
//     counter: Observable<number>;

//     constructor(private store: Store<AppState>){
//         this.counter = store.select('counter');
//     }

//     increment(){
//         this.store.dispatch({ type: INCREMENT });
//     }

//     decrement(){
//         this.store.dispatch({ type: DECREMENT });
//     }

//     reset(){
//         this.store.dispatch({ type: RESET });
//     }
// }