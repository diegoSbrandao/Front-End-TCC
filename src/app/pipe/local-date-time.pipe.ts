import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'Date'
})
export class LocalDateTimePipe implements PipeTransform {

  transform(date: string): string {
    let dateOut: moment.Moment = moment(date, "YYYY-MM-DDTHH:mm:ss"); 
   return dateOut.format("DD-MM-YYYY HH:mm:ss");
  
  }

}
