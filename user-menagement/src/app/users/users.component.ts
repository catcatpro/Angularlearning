import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { USERS } from '../mock-users'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // user = "老卫"
  public selectedUser:User|undefined
  public users = USERS

  
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(user: User):void
  {
    this.selectedUser = user
  }

}
