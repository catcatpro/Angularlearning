
import { Directive ,ElementRef, HostListener , Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input("appHighlight")
  highlightColor:string =''

  @Input()
  defaultColor = ""
  constructor(private el: ElementRef) {}

  @HostListener("mouseenter")
  onMouseEnter(){
    this.highlight(this.highlightColor ||  this.defaultColor || 'red')

    // console.log(this.el.nativeElement.style)
  }

  @HostListener("mouseleave")
  onMouseLeave(){
    this.highlight("")
  }

  private highlight(color: string){
     this.el.nativeElement.style.backgroundColor = color;
  }


}
