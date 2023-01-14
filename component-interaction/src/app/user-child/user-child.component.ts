import { Component, Input } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-user-child',
  // templateUrl: './user-child.component.html',
  template: `
    <p>{{user?.name}}的老师是{{masterName}}</p>
  `,
  styleUrls: ['./user-child.component.css']
})
export class UserChildComponent {
  @Input() user: User|undefined //输入型属性
  @Input() masterName: String|undefined //输入型属性
  constructor() { }


}
