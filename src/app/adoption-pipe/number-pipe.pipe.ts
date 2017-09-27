import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'numberPipe'
})
export class NumberPipePipe implements PipeTransform {

  transform(value: string, length: number): string {
    if (value) {
      if (value.length > length) {
        return value.substring(0, length) + '...';
      } else {
        return value;
      }
    } else {
      return value;
    }
  }
}
