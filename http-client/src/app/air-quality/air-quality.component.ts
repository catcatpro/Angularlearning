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
    this.airQualityService.getAirData().subscribe(
      (airQualityData: AirQuality|any) => this.airQuality = {
        status: airQualityData['status'],
        data: { aqi:airQualityData['data']['api'],  time: airQualityData['data']['time']},
       
      }
    )
  }
}
