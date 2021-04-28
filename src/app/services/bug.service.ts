import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Bug } from '../bugs/bug.interface';

@Injectable({ providedIn: 'root' })
export class BugService {
  private bugsApiUrl = 'api/bugs';
  // private bugsApiUrl = 'http://localhost:3000/bugs'; // uncomment when api is ready

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };

  constructor(private http: HttpClient) {}

  public getBugs(): Observable<Bug[]> {
    return this.http
      .get<Bug[]>(this.bugsApiUrl)
      .pipe(catchError(this.handleError<Bug[]>('getBugs', [])));
  }

  public getBugNo404<Data>(id: number): Observable<Bug> {
    const url = `${this.bugsApiUrl}/?id=${id}`;
    return this.http.get<Bug[]>(url).pipe(
      map((bugs) => bugs[0]),
      catchError(this.handleError<Bug>(`getBug id=${id}`))
    );
  }

  public getBug(id: any): Observable<Bug> {
    const url = `${this.bugsApiUrl}/${id}`;
    return this.http
      .get<Bug>(url)
      .pipe(catchError(this.handleError<Bug>(`getBug id=${id}`)));
  }

  // todo
  public searchBugs(term: string): Observable<Bug[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http
      .get<Bug[]>(`${this.bugsApiUrl}/?title=${term}`)
      .pipe(catchError(this.handleError<Bug[]>('searchBugs', [])));
  }

  public addBug(bug: Bug): Observable<Bug> {
    bug.state = 'opened';
    return this.http
      .post<Bug>(this.bugsApiUrl, bug, this.httpOptions)
      .pipe(catchError(this.handleError<Bug>('addBug')));
  }

  public deleteBug(id: number): Observable<Bug> {
    const url = `${this.bugsApiUrl}/${id}`;

    return this.http
      .delete<Bug>(url, this.httpOptions)
      .pipe(catchError(this.handleError<Bug>('deleteBug')));
  }

  public updateBug(bug: Bug): Observable<any> {
    return this.http
      .patch(`${this.bugsApiUrl}/${bug.id}`, bug, this.httpOptions)
      .pipe(catchError(this.handleError<any>('updateBug')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
