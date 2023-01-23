/*
 * @Author: catcatproer
 * @Date: 2023-01-11 10:02:41
 * @LastEditors: catcatproer
 * @LastEditTime: 2023-01-23 13:32:48
 * @FilePath: \component-interaction\src\app\app-routing.module.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by catcatproer, All Rights Reserved. 
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoteTakerComponent } from './vote.taker.component'
import { CountdownViewChildParentComponent } from './countdown-parent.compoent';
import { MissionControlComponent } from './missioncontrol.component';
const routes: Routes = [
  {
    title: 'Voter',
    path: 'voter',
    component: VoteTakerComponent
  },
  {
    title: 'CountdownTimer',
    path: 'countdown-timer',
    component: CountdownViewChildParentComponent,
  },
  {
    title: 'MissionControl',
    path: 'mission-control',
    component: MissionControlComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
