import { Pipe, PipeTransform } from '@angular/core';
import { DealModel } from 'src/app/sales/models/deal-model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: DealModel[], searchKey: string): DealModel[] {

    if (!value || value.length == 0) return [];
    if (!searchKey) return value;
    let isExsit: DealModel[] = []

    value.forEach(deal =>
      deal.item.first_name.toLowerCase().includes(searchKey.toLowerCase())
        || deal.item.last_name.toLowerCase().includes(searchKey.toLowerCase())
        || deal.item.email.toLowerCase().includes(searchKey.toLowerCase()) ?
        isExsit.push(deal) : null
    )
    return isExsit
  }

}
