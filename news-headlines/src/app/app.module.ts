import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NavigateComponent } from './navigate/navigate.component';
import { NewsComponent } from './news/news.component'
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatTabsModule} from '@angular/material/tabs'
import { MatCardModule } from '@angular/material/card'
import {  MatDividerModule } from '@angular/material/divider';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { IndexComponent } from './index/index.component'
@NgModule({
  declarations: [
    AppComponent,
    NavigateComponent,
    NewsComponent,
    NewsDetailComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
