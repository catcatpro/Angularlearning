import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'news',
    component: NewsDetailComponent
  }
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
