import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../user'
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() user: User | undefined

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private Location: Location
    
  ) { }

  ngOnInit(): void {
    this.getUser()
  }
  
  getUser(): void{
    const id = this.route.snapshot.paramMap.get("id")
    this.userService.getUser(id?parseInt(id):null)
      .subscribe(user => this.user = user)
  }

  goBack():void{
    this.Location.back()
  }

  save(): void{
    this.userService.updateUser(this.user)
      .subscribe(() => this.goBack())
  }
}
