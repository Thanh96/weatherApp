import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showDay'
})
export class ShowDayPipe implements PipeTransform {

  transform(value: any, state: any): any {
    const date = new Date(value * 1000);
    const arrayDate = date.toLocaleTimeString('en', {  weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', hour12: false}).split(',');
    if (state === 'day') {
      return arrayDate.splice(0, 1);
    }
    // show Tue

    if (state === 'date') {
      return arrayDate.splice(1, 2);
    }
    // show April 26, 2018

    if (state === 'fulldate') {
      const arrayFullDate = date.toLocaleTimeString('en', {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).split(',');
      return arrayFullDate.splice(0, 3);
    }
    // show Saturday, April 26, 2018

    if (state === 'time') {
        return arrayDate.splice(3);
    }
    // show 01:00:00
    return value;
  }




}
