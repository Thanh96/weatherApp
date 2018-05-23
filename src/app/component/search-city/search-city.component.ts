import {
    Component,
    OnInit,
    Output,
    EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.css']
})
export class SearchCityComponent implements OnInit {

  @Output() searchCity = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  onSearchCity(f: NgForm): void {
    this.searchCity.emit(f.value.city);
    f.resetForm();
  }
}
