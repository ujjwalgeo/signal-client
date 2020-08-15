import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GeonodeUser } from './models/models';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeonodeApiService {

  constructor(public http: HttpClient) { }

  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userProfile');
  }

  isAuthenticated(): boolean {
    const accessToken: string = localStorage.getItem('accessToken');
    return !!accessToken;
  }

  getAccessToken(): string {
    return localStorage.getItem('accessToken');
  }

  getUserProfile(): Observable<GeonodeUser> {
    return this.http
      .get<GeonodeUser>(environment.signalapi.url + '/user-info')
      .pipe(
        catchError(
          this.handleError<GeonodeUser>('getUserProfile', null)
        )
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
