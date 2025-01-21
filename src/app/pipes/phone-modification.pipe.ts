import { Pipe, PipeTransform } from '@angular/core';
import { toArray } from 'rxjs';

@Pipe({
  name: 'phoneModification'
})
export class PhoneModificationPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, '+$1 ($2) $3-$4-$5' );
  }
}
