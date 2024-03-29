import { QuestionBase } from "./question-base";

export class QuestionTextBox extends QuestionBase<string>{
      override controlType = 'textbox';
      override type:string

      constructor(options: any = {}){
        super(options)
        this.type = options['type'] || ''
      }
}