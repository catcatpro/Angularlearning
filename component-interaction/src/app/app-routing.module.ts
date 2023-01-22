/*
 * @Author: catcatproer
 * @Date: 2023-01-11 10:02:41
 * @LastEditors: catcatproer
 * @LastEditTime: 2023-01-19 10:46:39
 * @FilePath: \component-interaction\src\app\app-routing.module.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by catcatproer, All Rights Reserved. 
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoteTakerComponent } from './vote.taker.component'
import { CountdownParentComponent } from './countdown-parent.compoent';

const routes: Routes = [
  {
    title: 'Voter',
    path: 'voter',
    component: VoteTakerComponent
  },
  {
    title: 'CountdownTimer',
    path: 'countdown-timer',
    component: CountdownParentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
