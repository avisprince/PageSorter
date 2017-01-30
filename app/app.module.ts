import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './components/app/app.component';
import { PagesComponent }  from './components/pages/pages.component';
import { SelectedPageComponent }  from './components/selectedPage/selectedPage.component';
import { PileComponent } from './components/pile/pile.component';
import { PileListComponent } from './components/pileList/pileList.component';

import { rootReducer } from './store/pageSorterStore';

import { pageSorterStoreReducer } from './reducers/pageSorterStoreReducer';

import { PagesService } from './services/pagesService';

import { PageBuilder } from './models/Page';

@NgModule({
  imports:      [ 
      BrowserModule,
      HttpModule,
      StoreModule.provideStore(pageSorterStoreReducer),
      StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  declarations: [ AppComponent, PagesComponent, PileComponent, PileListComponent, SelectedPageComponent ],
  providers:    [ PagesService, PageBuilder ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
