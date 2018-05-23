import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    OnChanges } from '@angular/core';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit, OnChanges {
  @Input() weatherWeek;
  @Input() units: string;
  @Output() selectDay = new EventEmitter<Object>();

  constructor() { }

  ngOnInit() { }

  ngOnChanges(): void { }
}
