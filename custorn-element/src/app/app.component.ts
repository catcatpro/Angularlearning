import { Component, Inject, Injector } from '@angular/core';
import { createCustomElement }  from '@angular/elements'
import { PopupService } from './popup.service';
import  { PopupComponent } from './popup.component'

@Component({
  selector: 'app-root',
  template : `
    <input type="text" #input value="Message">
    <button type="button"  (click)="popup.showAsComponent(input.value)">Show as component</button>
    <button type="button" (click)="popup.showAsElement(input.value)">Show as element</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custorn-element';
  constructor(injector: Injector, public popup: PopupService){
    const PopupElement = createCustomElement(PopupComponent, {injector})
    customElements.define('popup-element', PopupElement)
  }
}
