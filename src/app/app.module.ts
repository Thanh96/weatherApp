import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { WeatherService } from './service/weather.service';

import { AppComponent } from './app.component';
import { WeatherComponent } from './component/weather/weather.component';
import { SearchCityComponent } from './component/search-city/search-city.component';
import { WeatherItemComponent } from './component/weather-item/weather-item.component';
import { WeatherChartComponent } from './component/weather-chart/weather-chart.component';
import { WeatherDetailComponent } from './component/weather-detail/weather-detail.component';
import { WeatherHeaderComponent } from './component/weather-header/weather-header.component';
import { WeatherListComponent } from './component/weather-list/weather-list.component';

import { ShowDayPipe } from './pipe/show-day.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SearchCityComponent,
    WeatherItemComponent,
    WeatherChartComponent,
    ShowDayPipe,
    WeatherDetailComponent,
    WeatherHeaderComponent,
    WeatherListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ WeatherService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
