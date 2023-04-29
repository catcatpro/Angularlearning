import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  constructor(){}

  ngOnInit(): void {
      
  }

  jobs = ["独立开发者","医生","教师"]
  model = new User(1, "老张", this.jobs[0], 25)

  submitted = false

  onSubmit(){
    this.submitted = true
  }

  newUser(){
    this.model = new User(1, '', '')
  }
  get diagnostic(){
    return JSON.stringify(this.model)
  }
}
