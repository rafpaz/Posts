import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserPostsService {

  private postsUrl = 'http://localhost:8080/SpringBootPostsApp/api/post';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

    getUserPosts(userId: number) {
      const url = `${this.postsUrl}/${userId}`;
      return this.http.get(url).pipe(
        tap(bla => console.log(bla)),
        catchError(this.handleError('An error with user login'))
      );
    }

    private log(message: string) {
      console.log(message);
    }

    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}
