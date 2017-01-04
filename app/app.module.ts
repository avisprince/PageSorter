import { Store, StoreModule } from '@ngrx/store';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './components/app/app.component';
import { PagesComponent }  from './components/pages/pages.component';
import { pagesReducer } from './reducers/pagesReducer';
import { selectedPageReducer } from './reducers/selectedPageReducer';
import { counterReducer } from './reducers/counter';

import { PagesService } from './services/pagesService';

@NgModule({
  imports:      [ 
      BrowserModule,
      StoreModule.provideStore({ pages: pagesReducer, selectedPage: selectedPageReducer })
      //StoreModule.provideStore({ counter: counterReducer })
  ],
  declarations: [ AppComponent, PagesComponent ],
  providers:    [ PagesService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
