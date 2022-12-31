import { NgModule } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: "dashboard",
    pathMatch: "full"
  }
]
@NgModule({

  exports: [RouterModule],
  imports:[
    RouterModule.forRoot(routes) 
  ]
})
export class AppRoutingModule { }
