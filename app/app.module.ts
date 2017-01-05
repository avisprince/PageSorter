import { Store, StoreModule } from '@ngrx/store';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './components/app/app.component';
import { PagesComponent }  from './components/pages/pages.component';
import { BucketComponent } from './components/bucket/bucket.component';

import { pagesReducer } from './reducers/pagesReducer';
import { selectedPageReducer } from './reducers/selectedPageReducer';
import { bucketsReducer } from './reducers/bucketsReducer';

import { PagesService } from './services/pagesService';

@NgModule({
  imports:      [ 
      BrowserModule,
      StoreModule.provideStore({ pages: pagesReducer, selectedPage: selectedPageReducer, buckets: bucketsReducer })
  ],
  declarations: [ AppComponent, PagesComponent, BucketComponent ],
  providers:    [ PagesService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
