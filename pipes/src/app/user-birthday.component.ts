import {
    Component
 } from "@angular/core"

 @Component({
    selector: 'app-user-birthday', 
    template: `<p>用户的生日是{{ birthday | date }}</p>
    <p>小写转大写：{{title | uppercase}}</p>
    <p>大写转小写：{{title | lowercase}}</p> 
    <p>价格转换：{{price | currency}}</p>
    <p>价格转换(指定货币代码)：{{price | currency:'CAD':'symbol-narrow ':'4.2-2'}}</p>
    <p>数字转换百分比：{{ a | percent:'4.3-5' }}</p>
   <p>为管道传递参数：{{ birthday | date: "yyy/MM/dd"}}</p>
   <p>管道串联：{{ birthday | date:"fullDate" | uppercase }}</p>
    ` //使用DatePipe管道
 })

 export class UserBirthday{
    birthday = new Date(1907, 0, 17)
    title = 'ABC'
    price = 0.299
    a = 0.259
 }