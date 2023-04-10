import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { fade, rotate } from 'src/app/styles/animation-trigger';
import { DealModel } from '../../models/deal-model';
import { DealStatgeList, Stage } from '../../models/deal-statge-list';
import { DealRequestsService } from '../../service/deal-requests.service';
import { Subscription, firstValueFrom, lastValueFrom } from 'rxjs';



@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss'],
  animations: [rotate, fade]
})
export class DealsComponent implements OnInit, OnDestroy {
  statges: Stage[] = ['Potential Value', 'Focus', 'Contact Made', 'Offer Sent', 'Getting Ready']
  deals: DealModel[] = <DealModel[]>[]
  isDragged: boolean = false
  deleteBox: boolean = false

  searchVal!: string

  dataList: DealStatgeList = <DealStatgeList>{}
  subscription?: Subscription
  originalDataList: DealStatgeList = <DealStatgeList>{}
  constructor(private dealReqService: DealRequestsService) { }
  ngOnInit(): void {
    this.subscription = this.dealReqService.data.subscribe(value => {      
      if (!this.originalDataList.items) {
        this.originalDataList = new DealStatgeList(value, this.dataList)
      }
      this.dataList = new DealStatgeList(value, this.dataList)
      this.restoreOriginalOrder();
    })
  }


  removeItemFromArray(currentArray: DealModel[], currentIndex: number) {
    const id = currentArray[currentIndex].item.id;
    this.dealReqService.delete(id)
  }


  drop(event: CdkDragDrop<any[]>, statge: Stage | 'delete') {
    let itemId = event.previousContainer.data[event.previousIndex].item.id

    if (statge == 'delete'){
      this.removeItemFromArray(event.previousContainer.data, event.previousIndex)    
      console.log('remove');
        
    }

    else if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log('else');
      
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.originalDataList = this.dataList
      this.dealReqService.update(itemId, { status: <Stage>statge })
      // move throw statges 
    }
    this.originalDataList = this.dataList
  }
  private restoreOriginalOrder() {

    if (this.originalDataList && this.dataList) {
      // Loop through each array and restore the original order
      for (const key in this.dataList.items) {
        const currentOrder: any = this.dataList.items[<Stage>key];
        const originalOrder: any = this.originalDataList.items[<Stage>key];
        for (let i = 0; i < currentOrder.length; i++) {
          const originalIndex = originalOrder.findIndex((item: any) => item.id === currentOrder[i].id);
          if (originalIndex !== -1 && originalIndex !== i) {
            moveItemInArray(currentOrder, i, originalIndex);
          }
        }
      }
    }
  }
  ngOnDestroy(): void {
    (<Subscription>this.subscription).unsubscribe()
  }
}
