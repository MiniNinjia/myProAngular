import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'page'
})
export class PagePipe implements PipeTransform {

  transform(value: any, pagenumber: any, pagesize: any): any {
    if (value) {
      const start = (pagenumber - 1) * pagesize + 1;
      return value.slice(start - 1, start + 1 + pagesize);
    } else {
      return null;
    }
  }
}
