import { Component, Input } from '@angular/core';
import { DealModel } from 'src/app/sales/models/deal-model';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  {
  @Input('deal') deal?: DealModel

}
