import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()

export class WeatherService {

    private urlChart = 'http://api.openweathermap.org/data/2.5/forecast?mode=json&appid=e072e10c72895a8d50d456449406e1d9';
    // url get weather chart each day

    private urlWeek = 'http://api.openweathermap.org/data/2.5/forecast/daily?cnt=6&mode=json&appid=c9d49310f8023ee2617a7634de23c2aa';
    // url get weather week

    private urlDetailSun = 'http://api.openweathermap.org/data/2.5/weather?apikey=e072e10c72895a8d50d456449406e1d9';
    // url get weather info (sunset, sunrise)

    constructor(private http: HttpClient) {}

    getWeatherWeek(city: string, units: string): Observable<any> {
        city = city.trim();
        if (!city) {
            return of([]);
        }
        // if not city return empty array

        const url = `${this.urlWeek}&q=${city}&units=${units}`;
        return this.http.get(url)
            .pipe(
                catchError(this.handleError())
            );
    }

    getWeatherChart(city: string, units: string): Observable<any> {
        city = city.trim();
        if (!city) {
            return of([]);
        }
        const url = `${this.urlChart}&q=${city}&units=${units}`;
        return this.http.get(url)
            .pipe(
                catchError(this.handleError())
            );
    }

    getDetailSun(city: string): Observable<any> {
        city = city.trim();
        if (!city) {
            return of([]);
        }
        const url = `${this.urlDetailSun}&q=${city}`;
        return this.http.get(url)
            .pipe(
                catchError(this.handleError())
            );
    }

    private handleError<T> (result?: T) {
        return (): Observable<T> => {
            return of(result as T);
            // return empty result to app keep run
        };
    }
}
