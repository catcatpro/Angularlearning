import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AirQuality } from './air-quality';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirQualityService {

  constructor(private http: HttpClient) { }
  
  airQualityUrl = "https://api.waqi.info/feed/@14332/?token=8d1ee363ec11a5b67044c3593c0c34e44c3d8084"

  getAirData(){
    //  return this.http.get(this.airQualityUrl)
    //返回类型检查的响应
     return this.http.get<AirQuality>(this.airQualityUrl)
  }

  getAirDataResponse(): Observable<HttpResponse<AirQuality>>{
    return this.http.get<AirQuality>(
      this.airQualityUrl, {observe: 'response'}
    ).pipe(
      retry(3) //重试3次
      ,catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent)
    {
      console.error("发生了错误:", error.error.message)

    }else{
      console.error(
        `错误状态码: ${error.status}`,
        `响应体：${error.error}`
      )
    }
    return throwError("发生了错误，请重试")
  }
}
