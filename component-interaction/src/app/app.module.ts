/*
 * @Author: catcatproer
 * @Date: 2023-01-11 10:02:41
 * @LastEditors: catcatproer
 * @LastEditTime: 2023-01-23 13:30:49
 * @FilePath: \component-interaction\src\app\app.module.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by catcatproer, All Rights Reserved. 
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserParentComponent } from './user-parent/user-parent.component';
import { UserChildComponent } from './user-child/user-child.component';
import { NameParentComponent } from './name-parent.component'
import { NameChildComponent } from './name-child.component'
import { VersionChildComponent } from './version-child.component';
import { VersionParentComponent } from './version-parent.component';
import { VoteTakerComponent } from './vote.taker.component'
import { VoterComponent } from './voter.component'
import { CountdownViewChildParentComponent } from './countdown-parent.compoent';
import { CountdownTimerComponent } from './countdown-timer.component';
import { AstronautComponent } from './astronaut.component';
import { MissionControlComponent } from './missioncontrol.component';
@NgModule({
  declarations: [
    AppComponent,
    UserParentComponent,
    UserChildComponent,
    NameParentComponent,
    NameChildComponent,
    VersionParentComponent,
    VersionChildComponent,
    VoteTakerComponent,
    VoterComponent,
    CountdownViewChildParentComponent,
    CountdownTimerComponent,
    MissionControlComponent,
    AstronautComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
