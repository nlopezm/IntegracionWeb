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
    return this.http.get<any[]>(this.url).pipe(
      map(res => this.mapLiquidacion(res['_embedded'].liquidaciones),
        catchError(err => of(err))));
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
    return this.http.get<any[]>(environment.baseApiUrl + '/tarjetas/' + idTarjeta + '/liquidaciones').pipe(
      map(liquidaciones => this.mapLiquidacion(liquidaciones),
        catchError(err => of(err))));
  }

  mapLiquidacion(liquidaciones: any) {
    liquidaciones.forEach(liquidacion => {
      liquidacion.consumos = liquidacion.consumos.filter((consumo) => !consumo.cantCuotas);
      liquidacion.monto = 0;
      liquidacion.cuotas.forEach(cuota => {
        let consumo: any = {};
        consumo.fecha = cuota.consumoEnCuotas.fecha;
        consumo.establecimiento = cuota.consumoEnCuotas.establecimiento;
        consumo.descripcion = cuota.consumoEnCuotas.descripcion + ' (' + cuota.numeroDeCuota + '/' + cuota.consumoEnCuotas.cantCuotas + ')';
        consumo.monto = cuota.montoCuota;
        liquidacion.consumos.push(consumo);
        liquidacion.monto += consumo.monto;
      });
    });
    return liquidaciones;
  }

  forzarLiquidaciones(): Observable<{}> {
    return this.http.get(this.url + '/procesar');
  }


}
