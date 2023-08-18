import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnChanges {

  defaultColor = 'rgb(211, 211, 211)'
  @Input('highlight') bgColor:string  =''
  constructor(private el?: ElementRef) {
    if(el)
      el.nativeElement.style.customProperty = true
   }

   ngOnChanges(changes: SimpleChanges): void {
    if(this.el)
      this.el.nativeElement.style.backgroundColor = this.bgColor || this.defaultColor;
   }

}
