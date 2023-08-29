import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { NewMsg } from './new';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  newsApiUrl = "http://v.juhe.cn/toutiao/index"
  type = 'top'
  key = '1469cfb2f187f01b873654edc31eb2d1'
  constructor(private http: HttpClient) { }

  tabSelected = new EventEmitter<string>()
  getNewsData(){
    return this.http.get<NewMsg>(this.newsApiUrl + "?type=" + this.type + '&key=' + this.key)
  }

  setAlias(alias:string){
    this.type = alias
  }
}
