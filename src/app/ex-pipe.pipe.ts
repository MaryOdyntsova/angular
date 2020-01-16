import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exPipe'
})
export class ExPipePipe implements PipeTransform {

  transform(str: string): string {
    return `${str.trim()} !!!`;
  }

}
