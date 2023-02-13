/*
 * @Author: catcatproer
 * @Date: 2023-01-31 11:15:24
 * @LastEditors: catcatproer
 * @LastEditTime: 2023-02-12 11:17:30
 * @FilePath: \dynamic-component\src\app\app.module.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by catcatproer, All Rights Reserved. 
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroJobComponent } from './hero-job.ad.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdBannerComponent } from './ad-banner.component';
import { AdDirective } from './ad.directive';
import { AdService } from './ad.service';

@NgModule({
  declarations: [
    AppComponent,
    AdBannerComponent,
    HeroJobComponent,
    HeroProfileComponent,
    AdDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AdService],
  bootstrap: [AppComponent],
})
export class AppModule { }
