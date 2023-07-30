import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloaderService {

  constructor(private http:HttpClient) { }

  downLoadUrl = "https://www.baidu.com"

  getTextFile(filename: string){
    return this.http.get(filename, { responseType: 'text'})
      .pipe(
        tap(
          data => console.log(data),
          err => console.error(err)
        )
      )
  }
}
