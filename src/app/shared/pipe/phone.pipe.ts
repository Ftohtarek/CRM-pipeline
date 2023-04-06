import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string | undefined, ...args: unknown[]): string | null {
    if (!value) return null;
    const phoneRegex = /^(\d{3})(\d{1,3})(\d{3})$/;
    return this.extractNumber(value).replace(phoneRegex, "$1  $2  $3");
  }
  
  private extractNumber(value: string, maxLength:number= 9) {
    let cleanString = value.replace(/\D/g, "")
    return cleanString.slice(0, maxLength)
  }

}
