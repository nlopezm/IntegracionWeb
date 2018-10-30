import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import 'rxjs/Rx';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CobranzaService {
  url = environment.baseApiUrl + 'cobranzas';
  constructor(public http: HttpClient) { }

  getCobranzas(): Observable<{}> {
    return this.http.get(this.url).pipe(
      map(res => res['_embedded'].cobranzas),
      catchError(err => of(err)));
  }

  getCobranza(id: number): Observable<{}> {
    return this.http.get(this.url + '/' + id);
  }

  deleteCobranza(id: number): Observable<{}> {
    return this.http.delete(this.url + '/' + id);
  }

  updateCobranza(id: number, cobranza: any): Observable<{}> {
    return this.http.put(this.url + '/' + id, cobranza);
  }

  postCobranza(cobranza: any): Observable<{}> {
    return this.http.post(this.url, cobranza);
  }

}
