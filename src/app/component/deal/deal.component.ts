import { Component } from '@angular/core';
import { CrmError } from 'src/app/Error/crm.error';
import { DealRequestsService } from 'src/app/service/deal-requests.service';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.scss']
})
export class DealComponent {
  constructor(private dealReq: DealRequestsService) {
    dealReq.getAll.subscribe(value => console.log(value))
    dealReq.update(2,{company:'f'})
  }
}
