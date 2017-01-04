import { Store, StoreModule } from '@ngrx/store';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './components/app/app.component';
import { pagesReducer } from './reducers/pagesReducer';
import { selectedPageReducer } from './reducers/selectedPageReducer';

import { PagesService } from './services/pagesService';

@NgModule({
  imports:      [ 
      BrowserModule,
      StoreModule.provideStore({ pagesReducer, selectedPageReducer })
  ],
  declarations: [ AppComponent ],
  providers:    [ PagesService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
