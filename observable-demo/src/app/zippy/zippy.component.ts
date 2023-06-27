import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  visable = true
  @Output() open = new EventEmitter<any>()
  @Output() close = new EventEmitter<any>()

  toggle(){
    this.visable =!this.visable
    if(this.visable){
      this.open.emit(null)
    }else{
      this.close.emit(null)
    }
  }
}
