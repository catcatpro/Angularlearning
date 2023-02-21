/*
 * @Author: catcatproer
 * @Date: 2023-02-14 10:32:13
 * @LastEditors: catcatproer
 * @LastEditTime: 2023-02-21 11:12:01
 * @FilePath: \custorn-element\src\app\app.module.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by catcatproer, All Rights Reserved. 
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupService } from './popup.service';
import { PopupComponent } from './popup.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [PopupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
