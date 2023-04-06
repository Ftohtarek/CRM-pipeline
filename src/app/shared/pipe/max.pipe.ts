import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'max'
})
export class MaxPipe implements PipeTransform {

  transform(value: string | undefined, maxLength: number = 15): string | null {
    if (!value) return null;
    return value.slice(0, maxLength)
  }

}
