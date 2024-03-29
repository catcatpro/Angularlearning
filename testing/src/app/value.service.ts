import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValueService {

  constructor() { }
  
  protected value = "real value"

  getValue(){
    return this.value
  }

  setValue(value: string){
    this.value = value
  }

  getObservableValue(){
    return of('observable value')
  }
  getPromiseValue(){
    return Promise.resolve("promise value")
  }

  getObservableDelayValue(){
    return of("observable delay value").pipe(delay(10))
  }
  
}
