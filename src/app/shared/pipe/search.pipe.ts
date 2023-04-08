import { Pipe, PipeTransform } from '@angular/core';
import { DataListItem } from 'src/app/sales/models/deal-statge-list';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: DataListItem[], searchKey: string): DataListItem[] {
    if (!value || value.length == 0) return [];
    if (!searchKey) return value;
    let isExsit: DataListItem[] = []

    value.forEach(deal =>
      deal.data.item.first_name.toLowerCase().includes(searchKey.toLowerCase()) || deal.data.item.last_name.toLowerCase().includes(searchKey.toLowerCase())
        || deal.data.item.email.toLowerCase().includes(searchKey.toLowerCase()) ?
        isExsit.push(deal) : null
    )
    return isExsit

  }

}
