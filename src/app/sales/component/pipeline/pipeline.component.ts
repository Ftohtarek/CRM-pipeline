import { Component } from '@angular/core';
import { DealRequestsService } from '../../service/deal-requests.service';
import { IDeal } from '../../models/deal.interface';
import { DealModel } from '../../models/deal';

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.scss']
})
export class PipelineComponent {
  deals: DealModel[] = <DealModel[]>[]
  constructor(private dealReqService: DealRequestsService) {
    dealReqService.getAll.subscribe(value => this.deals = value)
    setTimeout(() => {
      console.log(this.deals);
      
    }, 5000);
  }
}
