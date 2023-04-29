import { Component } from '@angular/core';

@Component({
  selector: 'app-keyenter',
  templateUrl: './keyenter.component.html',
  styleUrls: ['./keyenter.component.css']
})
export class KeyenterComponent {
value = ''
onEnter(value: string){
  this.value =  value 
}
}
