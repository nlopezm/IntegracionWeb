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
export class LiquidacionService {
  url = environment.baseApiUrl + 'liquidaciones';
  constructor(public http: HttpClient) { }

  getLiquidaciones(): Observable<{}> {
    return this.http.get(this.url).pipe(
      map(res => res['_embedded'].liquidaciones),
      catchError(err => of(err)));
  }

  getLiquidacion(id: number): Observable<{}> {
    return this.http.get(this.url + '/' + id);
  }

  deleteLiquidacion(id: number): Observable<{}> {
    return this.http.delete(this.url + '/' + id);
  }

  updateLiquidacion(id: number, liquidaciones: any): Observable<{}> {
    return this.http.put(this.url + '/' + id, liquidaciones);
  }

  postLiquidacion(liquidaciones: any): Observable<{}> {
    return this.http.post(this.url, liquidaciones);
  }

  getByTarjeta(idTarjeta: number): Observable<{}> {
    return this.http.get(environment.baseApiUrl + '/tarjetas/' + idTarjeta + '/liquidaciones');
  }

}
