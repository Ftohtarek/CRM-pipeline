import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { HttpClient } from '@angular/common/http';
import { IDeal, DealProperty } from '../models/deal';
import { Observable, map } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class DealRequestsService extends RequestService {
  constructor(http: HttpClient) {
    super(http)
    this.endPointUrl = "https://my-json-server.typicode.com/mabukoush1/contacts/db"
  }
  override get all(): Observable<IDeal[]> {
    return super.all.pipe(map((value: any) => value.deals))
  }
  override update(id: number, updatedRow: DealProperty) {
    return super.update(id, updatedRow)
  }
  override create(row: IDeal) {
    return super.create(row)
  }
}
