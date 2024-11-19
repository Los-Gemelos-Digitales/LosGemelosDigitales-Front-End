import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, Observable, retry, throwError} from 'rxjs';
import {EvacuationPlans} from '../../models/evacuation-plans/evacuationPlans';
import {Reports} from '../../models/reports/reports';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  baseUrl = "https://clever-vibrancy-production.up.railway.app/api/v1/reports"; // Cambié el puerto a 8080 y la URL base

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

  updateItem(id: number, item: Partial<Reports>): Observable<Reports> {
    return this.http.put<Reports>(`${this.baseUrl}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  deleteReport(id: number) {
    return this.http.delete(`http://localhost:8080/api/v1/reports/${id}`, { observe: 'response' });
  }
}
