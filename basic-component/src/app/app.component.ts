import {
  Component,
  VERSION,
  OnInit,
  OnChanges,
  OnDestroy,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Input,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  // <h1> {{name}} </h1>
  // `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit
{
  // name = 'Angular ' + VERSION.major;
  title: string = '生命周期钩子的例子';
  logIndex: number = 1;
  @Input() 
  name: string = ''

  constructor() {
    this.logIt('constructor');
  }

  logIt(msg: string) {
    console.log(`${this.logIndex++} ${msg}`);
  }

  ngAfterViewInit(): void {
    this.logIt('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.logIt('ngAfterViewChecked');
  }

  ngAfterContentInit(): void {
    this.logIt('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    this.logIt('ngAfterContentChecked');
  }

  ngOnChanges(changes: SimpleChanges) {
    //changes, 输入属性的所有变化的值
    let nameCurrentValue = changes['name'].currentValue; //属性的当前值
    let namePreviousValue = changes['name'].previousValue; //属性的前一个值
    this.logIt('ngOnChanges的currentValue值是' + nameCurrentValue);
    this.logIt('ngOnChanges的previousValue值是' + namePreviousValue);
  }

  ngDoCheck(): void {
    this.logIt('ngDoCheck');
  }

  ngOnInit(): void {
    this.logIt('ngOnInit');
  }
  ngOnDestroy(): void {
    this.logIt('ngOnDestroy');
  }
}
