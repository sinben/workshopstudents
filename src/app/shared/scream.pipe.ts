import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'scream'
})
export class ScreamPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return (value || '').toUpperCase() + '!!!';
  }

}
