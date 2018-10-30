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
export class ConsumoService {
  url = environment.baseApiUrl + 'consumos';
  constructor(public http: HttpClient) { }

  getConsumos(): Observable<{}> {
    return this.http.get(this.url).pipe(
      map(res => res['_embedded'].consumos),
      catchError(err => of(err)));
  }

  getConsumo(id: number): Observable<{}> {
    return this.http.get(this.url + '/' + id);
  }

  deleteConsumo(id: number): Observable<{}> {
    return this.http.delete(this.url + '/' + id);
  }

  updateConsumo(id: number, Consumos: any): Observable<{}> {
    return this.http.put(this.url + '/' + id, Consumos);
  }

  postConsumo(consumo: any): Observable<{}> {
    return this.http.post(environment.baseApiUrl + '/tarjetas/' + consumo.tarjetaId + '/consumosEnteros', consumo);
  }

}
