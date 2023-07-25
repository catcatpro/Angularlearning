import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AirQualityService {

  constructor(private http: HttpClient) { }
  
  airQualityUrl = "https://api.waqi.info/feed/@14332/?token=8d1ee363ec11a5b67044c3593c0c34e44c3d8084"

  getAirData(){
     return this.http.get(this.airQualityUrl)
  }
}
