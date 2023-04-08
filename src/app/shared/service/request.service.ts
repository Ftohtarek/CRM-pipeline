import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { BadInput } from '../../Errors/badinput.error';
import { CrmError } from '../../Errors/crmErrors';
import { NotFound } from '../../Errors/notfound.error';
/** 
 * A generic service to handle HTTP requests.
*/

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  protected endPointUrl: string = ""

  constructor(private http: HttpClient) { }

  get getAll(): Observable<unknown> {
    return this.http.get(this.endPointUrl).pipe(
      catchError(this.handleError))
  }

  getOne(id: number): Observable<unknown> {
    return this.http.get(this.endPointUrl + '/' + id).pipe(
      catchError(this.handleError))
  }
  create(row: any): Observable<unknown> {
    return this.http.post(this.endPointUrl, row).pipe(
      catchError(this.handleError))
  }

  update(id: number, updatedRow: any): Observable<unknown> | void {
    return this.http.patch(this.endPointUrl + '/' + id, updatedRow).pipe(
      catchError(this.handleError))
  }

  delete(id: number): Observable<unknown> | void {
    return this.http.delete(this.endPointUrl + '/' + id).pipe(
      catchError(this.handleError))
  }
  /**
   * Handles HTTP errors returned by the API and maps them to crm error types.
   * @param {HttpErrorResponse} error - The HTTP error object.
   * @returns {Observable<never>} An observable that emits an error of the appropriate 
   * custom error type based on the HTTP status code that handel in `CrmErrorHandler`.
   * @throws {BadInput} If the error status is 400 (Bad Request), an error of type BadInput is thrown.
   * @throws {NotFound} If the error status is 404 (Not Found), an error of type NotFound is thrown.
   * @throws {CrmError} For all other error statuses, an error of type CrmError is thrown.

  */
  private handleError(error: HttpErrorResponse) {
    if (error.status === 400)
      return throwError(() => new BadInput(error.error))

    if (error.status === 404)
      return throwError(() => new NotFound(error.error));

    return throwError(() => new CrmError(error.error));
  }
}
