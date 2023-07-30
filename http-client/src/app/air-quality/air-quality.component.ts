import { Component, OnInit } from '@angular/core';
import { AirQualityService } from './air-quality.service';
import { AirQuality } from './air-quality';
import { DownloaderService } from '../downloader.service';

@Component({
  selector: 'app-air-quality',
  templateUrl: './air-quality.component.html',
  styleUrls: ['./air-quality.component.css']
})
export class AirQualityComponent implements OnInit {
  constructor(private airQualityService: AirQualityService, private downloader: DownloaderService){}
  airQuality?:AirQuality|null
  headers?:string[]
  error?:any
  ngOnInit(): void {
      
  }

  showAirQualityData(){
 /*    this.airQualityService.getAirData().subscribe(
      (airQualityData: AirQuality|any) => this.airQuality = (() => {
        console.log(airQualityData['data']['time'])
        return {
          status: airQualityData['status'],
          data: { aqi:airQualityData['data']['aqi'],  time: airQualityData['data']['time']['s']},
         
        }
      })()
    ) */
    this.airQualityService.getAirData().subscribe(
      (airQualityData: AirQuality) => this.airQuality = airQualityData
    )
  }

  showAirQualityResponse(){
    this.airQualityService.getAirDataResponse().subscribe(resp=>{
      const keys =  resp.headers.keys()
      this.headers = keys.map(key => `${key}: ${resp.headers.get(key)}`)
      this.airQuality = resp.body
    }, (error: any) => {
      console.error(error)
      this.error = error
    })
  }

  getTextData(){
    this.downloader.getTextFile("/styles.css").subscribe(res => {
      console.log("res body", res)
    })
  }
}
