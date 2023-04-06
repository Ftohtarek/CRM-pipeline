import { Injectable } from '@angular/core';
import { RequestService } from '../../shared/service/request.service';
import { HttpClient } from '@angular/common/http';
import { IDeal, DealProperty } from '../models/deal.interface';
import { Observable, map } from 'rxjs'
import { DealModel } from '../models/deal';
/**
 * Service for requesting deals data.
 * Inherits from RequestService to handle HTTP requests.
 */
@Injectable({
  providedIn: 'root'
})
export class DealRequestsService extends RequestService {
  constructor(http: HttpClient) {
    super(http)
    this.endPointUrl = "https://my-json-server.typicode.com/mabukoush1/contacts/db"
  }

  /**
   * Overrides the getAll method of the parent RequestService class to return deals data as `IDeal[]`
   * @returns ` Observable<IDeal[]> ` - An observable of an array of IDeal objects.
  **/

  override get getAll(): Observable<DealModel[]> {
    return super.getAll.pipe(map(
      (value: any) => (<IDeal[]>value.deals).map(
        deal => new DealModel(deal))))
  }

  // update and create just example for using overwrite to anotate.

  override update(id: number, updatedRow: DealProperty) {
    return super.update(id, updatedRow)
  }
  override create(row: IDeal) {
    return super.create(row)
  }
}
