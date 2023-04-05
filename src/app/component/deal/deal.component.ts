import { Component } from '@angular/core';
import { DealRequestsService } from 'src/app/service/deal-requests.service';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.scss']
})
export class DealComponent {
  constructor(private dealReq: DealRequestsService) {
    dealReq.all.subscribe(value => console.log(value))
    // dealReq.add()
  }
}
