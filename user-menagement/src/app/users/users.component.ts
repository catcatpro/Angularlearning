import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { UserService } from '../user.service'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // user = "老卫"
  public selectedUser:User|undefined
  public users:User[]|undefined

  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  onSelect(user: User):void
  {
    this.selectedUser = user
  }

  getUsers():void{
    this.users = this.userService.getUsers()
  }
}
