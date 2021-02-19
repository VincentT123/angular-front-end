import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getSubArray'
})
export class GetSubArrayPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (args[0] && args[0] < value.length)
      return value.slice(args[0], args[1]);
    return value;
  }

}
