export class QuestionBase<T>{
    value?:T
    key: string
    label?:string
    required?:boolean
    order?: number
    controlType?: string
    type?:string
    options?: {key: string, value: string}[];
    constructor(options: {
        value?:T,
        key?:string,
        label?:string,
        required?:boolean,
        order?:number,
        controlType?:string,
        type?:string,
        options?: {key: string, value: string}[];
    } = {}){
        this.value = options.value
        this.key = options.key || ''
        this.label = options.label || ''
        this.required = !!options.required 
        this.order = this.order === undefined ? 1: this.order
        this.controlType = this.controlType || ''
        this.options = options.options||[]
    }


}