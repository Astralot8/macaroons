import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textReduction'
})
export class TextReductionPipe implements PipeTransform {

  transform(value: string): string {
    return value.slice(0, 95) + '...';
  }

}
