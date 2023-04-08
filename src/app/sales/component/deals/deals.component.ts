import { CdkDragDrop, moveItemInArray  ,transferArrayItem} from '@angular/cdk/drag-drop';
import { AfterViewInit, Component } from '@angular/core';
import { fade, rotate } from 'src/app/styles/animation-trigger';
import { DealModel } from '../../models/deal-model';
import { DataListItem, DealStatgeList, Stage } from '../../models/deal-statge-list';
import { DealRequestsService } from '../../service/deal-requests.service';



@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss'],
  animations: [rotate, fade]
})
export class DealsComponent implements AfterViewInit {
  statges: Stage[] = ['Potential Value', 'Focus', 'Contact Made', 'Offer Sent', 'Getting Ready']
  dataList: DealStatgeList = <DealStatgeList>{}
  deals: DealModel[] = <DealModel[]>[]
  isDragged: boolean = false
  deleteBox: boolean = false

  searchVal!: string
  constructor(private dealReqService: DealRequestsService) {
    dealReqService.data.subscribe(value => {
      this.dataList = new DealStatgeList(value, this.dataList)
    })

  }
  ngAfterViewInit(): void { }


  removeItemFromArray(currentArray: DataListItem[], currentIndex: number) {
    const id = currentArray[currentIndex].data.item.id;
    this.dealReqService.delete(id)
  }


  drop(event: CdkDragDrop<any[]>, statge: Stage | null) {

    if (event.container.id == 'cdk-drop-list-0')
      this.removeItemFromArray(event.previousContainer.data, event.previousIndex)

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      let statge: Stage = event.container.data[0].data.statge
      this.dataList.items[statge].forEach((model,index) => {
        model.position = index
      })   

    } else {
      // transferArrayItem(
      //   event.previousContainer.data,
      //   event.container.data,
      //   event.previousIndex,
      //   event.currentIndex,
      // );
      // move throw statges 
      let itemId = event.previousContainer.data[event.previousIndex].data.item.id
      this.dealReqService.update(itemId, { status: <Stage>statge })
    }
  }

}
