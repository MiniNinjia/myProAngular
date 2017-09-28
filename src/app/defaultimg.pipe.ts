import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultimg'
})
export class DefaultimgPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
