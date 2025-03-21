import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterArray',
    standalone: false
})
export class FilterArrayPipe implements PipeTransform {
  transform(value: any, ...args: any): any {
    if (value.length === 0 || args === undefined) {
      return value;
    }

    let filter = String(args).toLocaleLowerCase();

    return value.filter(
      (v: any) => v.toLocaleLowerCase().indexOf(filter) != -1
    );
  }
}
