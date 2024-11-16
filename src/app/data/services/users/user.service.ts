import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, map, Observable, retry, throwError} from 'rxjs';
import {Users} from '../../models/users/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = "http://localhost:8080/api/v1/users";

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

  getList(): Observable<Users[]> {
    return this.http.get<Users[]>(this.baseUrl).pipe(retry(2), catchError(this.handleError));
  }

  createItem(item: any): Observable<Users> {
    return this.http.post<Users>(this.baseUrl, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

}
