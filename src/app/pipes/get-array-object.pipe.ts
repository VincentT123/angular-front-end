import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getArrayObject'
})
export class GetArrayObjectPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return Object.entries(value);
  }

}
