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
export class TarjetaService {
  url = environment.baseApiUrl + 'tarjetas';
  constructor(public http: HttpClient) { }

  getTarjetas(): Observable<{}> {
    return this.http.get(this.url).pipe(
      map(res => res  ['_embedded'].tarjetas),
      catchError(err => of(err)));
  }

  getTarjeta(id: number): Observable<{}> {
    return this.http.get(this.url + '/' + id);
  }

  deleteTarjeta(id: number): Observable<{}> {
    return this.http.delete(this.url + '/' + id);
  }

  updateTarjeta(id: number, tarjetas: any): Observable<{}> {
    return this.http.put(this.url + '/' + id, tarjetas);
  }

  postTarjeta(tarjeta: any): Observable<{}> {
    return this.http.post(this.url, tarjeta);
  }

}
