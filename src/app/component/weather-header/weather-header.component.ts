import {
    Component,
    OnInit,
    Input,
    OnChanges,
    Output,
    EventEmitter } from '@angular/core';

@Component({
  selector: 'app-weather-header',
  templateUrl: './weather-header.component.html',
  styleUrls: ['./weather-header.component.css']
})
export class WeatherHeaderComponent implements OnInit, OnChanges {

  @Input() weatherDay: any;
  @Input() cityName: string;
  @Output() selectUnits = new EventEmitter<string>();

  iconUrl: string;

  constructor() { }

  ngOnInit() { }

  ngOnChanges() {
      this.iconUrl = `http://openweathermap.org/img/w/${this.weatherDay.weather[0].icon}.png`;
  }

  onSelectUnits(value: string): void {
    this.selectUnits.emit(value);
  }
}
