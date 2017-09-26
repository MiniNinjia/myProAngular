import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'headimg'
})
export class HeadimgPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      return value;
    } else {
      return 'upload/headimg/default.jpg';
    }
  }

}
