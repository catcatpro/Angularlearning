import { Component, OnInit } from '@angular/core';
import { AirQualityService } from './air-quality.service';
import { AirQuality } from './air-quality';

@Component({
  selector: 'app-air-quality',
  templateUrl: './air-quality.component.html',
  styleUrls: ['./air-quality.component.css']
})
export class AirQualityComponent implements OnInit {
  constructor(private airQualityService: AirQualityService){}
  airQuality?:AirQuality

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
}
