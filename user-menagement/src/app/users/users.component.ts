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
  // public selectedUser:User|undefined
  public users:User[]|undefined

  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers()
  }


  getUsers():void{
    // this.users = this.userService.getUsers()
    this.userService.getUsers().subscribe(users => this.users = users)
  }

  add(name: string): void{
    name = name.trim()
    if(!name) return;
    this.userService.addUser({ name } as User)
      .subscribe(user => {
        this.users?.push(user)
      })
  }

  delete(user: User):void{
    this.users = this.users?.filter(h => h != user)
    this.userService.deleteUser(user).subscribe()
  }
}
