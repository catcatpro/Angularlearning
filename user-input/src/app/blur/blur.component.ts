import { Component } from '@angular/core';

@Component({
  selector: 'app-blur',
  templateUrl: './blur.component.html',
  styleUrls: ['./blur.component.css']
})
export class BlurComponent {
  value = ''
  onEnter(value: string){
    this.value =  value 
  }
}
