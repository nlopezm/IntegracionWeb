import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import 'rxjs/Rx';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(public http: HttpClient) { }

  get(url): Observable<{}> {
    return this.http.get(url).pipe(
      map(res => res['_embedded']),
      catchError(err => of(err)));
  }

}
