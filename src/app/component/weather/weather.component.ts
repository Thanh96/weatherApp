import {
    Component,
    OnInit,
    Input,
    OnChanges } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
// import {
//     distinctUntilChanged,
//     switchMap } from 'rxjs/operators';

import { WeatherService } from '../../service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnChanges {
  weatherWeek: any; // list weather for a week
  weatherDay: any; // weather for a day
  weatherChart: any; // weather chart for a day / 3hour
  detailSun: any; // weather information in place
  noCity = true; // show error when not data
  units = 'metric'; // units format

  @Input() cityName: string;

  private searchCity = new Subject<string>();
  private changeUnits = new Subject<string>();

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
      this.searchCity
          .distinctUntilChanged()
          // ignore new term if same as previous term

          .switchMap((term: string) => this.weatherService.getWeatherWeek(term, this.units))
          // switch to new search each time the term change

          .subscribe(data => {
                  if (data) {
                      this.noCity = false;
                      this.weatherWeek = data;
                      this.weatherDay = this.weatherWeek.list[0];
                      this.cityName = this.weatherWeek.city.name;
                  } else {
                      this.noCity = true;
                  }
              }
          // store the results locally
          );
      // get weather week when change city

      this.searchCity
          .distinctUntilChanged()
          .switchMap((term: string) => this.weatherService.getWeatherChart(term, this.units))
          .subscribe(data => {
                  if (data) {
                      this.weatherChart = data;
                  }
              }
          );
      // get weather chart when change city

      this.searchCity
          .distinctUntilChanged()
          .switchMap((term: string) => this.weatherService.getDetailSun(term))
          .subscribe(data => {
                  if (data) {
                      this.detailSun = data;
                  }
              }
          );
      // get weather infomation a place (sunrise, sunset) when change city

      this.changeUnits
          .distinctUntilChanged()
          .switchMap((term: string) => this.weatherService.getWeatherWeek(this.cityName, term))
          .subscribe(data => {
                  if (data) {
                      this.noCity = false;
                      this.weatherWeek = data;
                      this.weatherDay = this.weatherWeek.list[0];
                  } else {
                      this.noCity = true;
                  }
              }
          );
      // get weather week when change units

      this.changeUnits
          .distinctUntilChanged()
          .switchMap((term: string) => this.weatherService.getWeatherChart(this.cityName, term))
          .subscribe(data => {
                  if (data) {
                      this.weatherChart = data;
                  }
              }
          );
      // get weather chart when change units
  }

  ngOnChanges() {
      this.searchCity.next(this.cityName);
      // push new city into observable when @input change
  }

  onSelectDay(e): void {
      this.weatherDay = e;
  }

  onSelectUnits(e): void {
      this.units = e;
      this.changeUnits.next(e);
      // push new units into observable
  }
}
