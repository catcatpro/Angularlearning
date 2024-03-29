import { Component , Input } from '@angular/core'

@Component({
    selector: 'app-name-child',
    template: `<h3>{{name}}</h3>`,  
})

export class NameChildComponent{
    private _name = ""
    
    @Input() //监听输入属性值的变化
    set name(name: string){
        this._name = (name && name.trim()) || '未设置用户名'
    }

    get name():string{
        return this._name
    }
}