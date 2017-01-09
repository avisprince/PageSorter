import { Store, StoreModule } from '@ngrx/store';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './components/app/app.component';
import { PagesComponent }  from './components/pages/pages.component';
import { BucketComponent } from './components/bucket/bucket.component';
import { BucketListComponent } from './components/bucketList/bucketList.component';

import { pagesReducer } from './reducers/pagesReducer';
import { selectedPageReducer } from './reducers/selectedPageReducer';
import { bucketsReducer } from './reducers/bucketsReducer';
import { bucketReducer } from './reducers/bucketReducer';

import { PagesService } from './services/pagesService';

@NgModule({
  imports:      [ 
      BrowserModule,
      StoreModule.provideStore({ pages: pagesReducer, selectedPage: selectedPageReducer, buckets: bucketsReducer, bucket: bucketReducer })
  ],
  declarations: [ AppComponent, PagesComponent, BucketComponent, BucketListComponent ],
  providers:    [ PagesService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
