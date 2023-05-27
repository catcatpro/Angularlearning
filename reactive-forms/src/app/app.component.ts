import { Component } from '@angular/core';
import { QuestionService } from './dynamic-form/question.service';
import { Observable } from 'rxjs';
import { QuestionBase } from './dynamic-form/question-base';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '响应式表单';

  questions$ :Observable<QuestionBase<any>[]>
  constructor(service: QuestionService){
    console.log('service.getQuestions()',service.getQuestions())
    this.questions$ = service.getQuestions()
  }
}
