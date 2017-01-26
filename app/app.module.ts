import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './components/app/app.component';
import { PagesComponent }  from './components/pages/pages.component';
import { SelectedPageComponent }  from './components/selectedPage/selectedPage.component';
import { BucketComponent } from './components/bucket/bucket.component';
import { BucketListComponent } from './components/bucketList/bucketList.component';

import { rootReducer } from './store/pageSorterStore';

import { pageSorterStoreReducer } from './reducers/pageSorterStoreReducer';

import { PagesService } from './services/pagesService';

@NgModule({
  imports:      [ 
      BrowserModule,
      HttpModule,
      StoreModule.provideStore(pageSorterStoreReducer),
      StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  declarations: [ AppComponent, PagesComponent, BucketComponent, BucketListComponent, SelectedPageComponent ],
  providers:    [ PagesService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
