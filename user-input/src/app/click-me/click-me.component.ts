import { Component } from '@angular/core';

@Component({
  selector: 'app-click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.css']
})
export class ClickMeComponent {
  clickMeMessage = ''

  onClickMe(){
    this.clickMeMessage = "vue和angular哪个好？"
  }
}
