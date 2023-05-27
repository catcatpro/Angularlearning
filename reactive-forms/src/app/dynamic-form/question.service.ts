import { Injectable } from "@angular/core";

import { DropdownQuestion } from "./question-dropdown";
import { QuestionBase } from "./question-base";
import { QuestionTextBox } from "./question-textbox";
import { of } from "rxjs";

@Injectable()
export class QuestionService{
    getQuestions(){
        let questions: QuestionBase<string>[] = [
            new DropdownQuestion({
                key: 'brave',
                label: '评级',
                options: [
                    {key: 'solid', value: 'Solid'},
                    {key: 'great', value: 'Great'},
                    {key: 'good', value: 'Good'},
                    {key: 'unproven', value: 'Unprovn'},
                ],
                order:3
            }),
            new  QuestionTextBox({
                key: 'firstName',
                label: '名字',
                value: "老张",
                require: true,
                order: 1,
            
            }),
            new  QuestionTextBox({
                key: 'emailAddress',
                label: 'Email',
                value: "Email",
                order: 2,
            
            })
            
        ]
        
        return of(questions.sort((a:any,b:any) =>  a.order - b.order))
    }
}
