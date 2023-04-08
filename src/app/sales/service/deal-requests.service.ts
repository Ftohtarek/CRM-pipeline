import { EventEmitter, Injectable } from '@angular/core';
import { RequestService } from '../../shared/service/request.service';
import { HttpClient } from '@angular/common/http';
import { IDeal, DealProperty } from '../models/deal.interface';
import { Observable, map } from 'rxjs'
import { DealModel } from '../models/deal-model';
import { DealStatgeList, Stage } from '../models/deal-statge-list';

/**
 * Service for requesting deals data.
 * Inherits from RequestService to handle HTTP requests.
 */
@Injectable({
  providedIn: 'root'
})
export class DealRequestsService extends RequestService {
  data: EventEmitter<DealModel[]> = new EventEmitter()
  private localData: DealModel[] = <DealModel[]>{};
  constructor(http: HttpClient) {
    super(http)
    this.endPointUrl = "https://my-json-server.typicode.com/mabukoush1/contacts/db"
    this.getAll.subscribe(d => {
      this.localData = d;
      this.fakeData()
      this.data.emit(d);
    })
  }

  /**
   * Overrides the getAll method of the parent RequestService class to return deals data as `IDeal[]`
   * @returns ` Observable<IDeal[]> ` - An observable of an array of IDeal objects.
  **/

  override get getAll(): Observable<DealModel[]> {
    return super.getAll.pipe(map(
      (value: any) => (<IDeal[]>value.deals).map(deal => new DealModel(deal))))
  }

  // update and create just example for using overwrite to anotate.

  override update(id: number, updatedRow: DealProperty): void {
    let item = this.localData[this.indexById(id)].item

    this.localData[this.indexById(id)].item = { ...item, ...updatedRow }

    this.data.emit(this.localData)
  }
  override create(row: IDeal) {
    return super.create(row)
  }
  override delete(id: number) {
    this.localData.splice(this.indexById(id), 1)
    this.data.emit(this.localData)
  }
  private fakeData() {
    this.localData[1].item.probability_status = '100%'
    this.localData[6].item.probability_status = '100%'
    const index = this.localData.findIndex(e => e.item.id == 10)
    this.localData[index].item.probability_status = '100%'
  }

  private indexById = (id: number) => this.localData.findIndex(el => el.item.id == id)
  private duplicateDate(data: IDeal[]): IDeal[] {
    return [...data, ...data]
  }
}
