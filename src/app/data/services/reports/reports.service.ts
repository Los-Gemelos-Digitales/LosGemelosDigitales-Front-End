import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, Observable, retry, throwError} from 'rxjs';
import {EvacuationPlans} from '../../models/evacuation-plans/evacuationPlans';
import {Reports} from '../../models/reports/reports';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  baseUrl = "http://localhost:3000/reports";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error(`An error occurred: ${error.error.message}`);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something went wrong; please try again later.');
  }

  getList(): Observable<Reports[]> {
    return this.http.get<Reports[]>(this.baseUrl).pipe(retry(2), catchError(this.handleError));
  }

  createItem(item: any): Observable<Reports> {
    return this.http.post<Reports>(this.baseUrl, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
