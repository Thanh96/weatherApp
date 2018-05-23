import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    OnChanges } from '@angular/core';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit, OnChanges {
  @Input() weatherDay: any;
  @Input() units: string;
  @Output() selectDay = new EventEmitter<Object>();

  iconUrl: string;

  constructor() { }

  ngOnInit() { }

  ngOnChanges() {
      this.iconUrl = `http://openweathermap.org/img/w/${this.weatherDay.weather[0].icon}.png`;
  }
}
