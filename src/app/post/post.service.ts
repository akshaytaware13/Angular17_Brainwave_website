import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpclient: HttpClient) { }

  //getAllMethods
  getAll(): Observable<any> {
    return this.httpclient.get(this.apiUrl + '/').pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

  //create Methods
  create(post: Post): Observable<any> {
    return this.httpclient
      .post(this.apiUrl + '/', JSON.stringify(post), this.httpOptions)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      );
  }

  // find Data
  find(id: number): Observable<any> {
    return this.httpclient.get(this.apiUrl + '/' + id).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

  //Update data
  update(id: number, post: Post): Observable<any> {
    return this.httpclient
      .put(this.apiUrl + '/' + id, JSON.stringify(post), this.httpOptions)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      );
  }

  // Delete Data
  delete(id: number) {
    return this.httpclient.delete(this.apiUrl + '/' + id).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
}
