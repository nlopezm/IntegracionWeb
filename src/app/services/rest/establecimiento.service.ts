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
export class EstablecimientoService {
  url = environment.baseApiUrl + 'establecimientos';
  constructor(public http: HttpClient) { }

  getEstablecimientos(): Observable<{}> {
    return this.http.get(this.url).pipe(
      map(res => res['_embedded'].establecimientos),
      catchError(err => of(err)));
  }

  getEstablecimiento(id: number): Observable<{}> {
    return this.http.get(this.url + '/' + id);
  }

  deleteEstablecimiento(id: number): Observable<{}> {
    return this.http.delete(this.url + '/' + id);
  }

  updateEstablecimiento(id: number, establecimiento: any): Observable<{}> {
    return this.http.put(this.url + '/' + id, establecimiento);
  }

  postEstablecimiento(establecimiento: any): Observable<{}> {
    return this.http.post(this.url, establecimiento);
  }

}
