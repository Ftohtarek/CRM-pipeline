import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  protected endPointUrl: string = ""

  constructor(private http: HttpClient) { }

  get all(): Observable<any> {
    return this.http.get(this.endPointUrl)
  }

  get(id: number): Observable<any> {
    return this.http.get(this.endPointUrl + '/' + id).pipe(
      map(resbonce => resbonce),
      catchError(this.handleError)
    )
  }
  create(row: any): Observable<any> {
    return this.http.post(this.endPointUrl, JSON.stringify(row))
  }

  update(id: number, updatedRow: any): Observable<any> {
    return this.http.patch(this.endPointUrl + '/' + id, JSON.stringify(updatedRow))
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.endPointUrl + '/' + id)
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return 'BadInput'

    if (error.status === 404)
      return 'NotFoundError'

    return 'UnExpacted Error';
  }
}
