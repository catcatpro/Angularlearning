import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsDetailService {

  constructor(private http: HttpClient) { }

  getNewsData(newsApiUrl: string){
    return this.http.get(newsApiUrl, {
      responseType: 'text'
    })
  }
}
