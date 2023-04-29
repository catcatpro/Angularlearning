import { Component } from '@angular/core';

@Component({
  selector: 'app-keyup',
  templateUrl: './keyup.component.html',
  styleUrls: ['./keyup.component.css']
})
export class KeyupComponent {
  value = ''
  onKey(event: KeyboardEvent){
    this.value += (<HTMLInputElement>event.target).value + ' | ' 
  }
}
