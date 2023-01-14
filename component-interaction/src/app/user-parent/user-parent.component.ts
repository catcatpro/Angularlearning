import { Component  } from '@angular/core';
import { USERS, User } from '../user';
@Component({
  selector: 'app-user-parent',
  template: `
    <h2>{{master}} 有 {{users.length}} 个学生</h2>
    <app-user-child *ngFor="let user of users" 
      [user]="user"
      [masterName]="master"></app-user-child>
  `,
  styleUrls: ['./user-parent.component.css']
})
export class UserParentComponent   {
  public users:User[] = USERS
  public master:string = "老张"
  constructor() { }
 
}
