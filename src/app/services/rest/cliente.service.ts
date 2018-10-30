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
export class ClienteService {
  url = environment.baseApiUrl + 'clientes';
  constructor(public http: HttpClient) { }

  getClientes(): Observable<{}> {
    return this.http.get(this.url).pipe(
      map(res => res._embedded.clientes),
      catchError(err => of(err)));
  }

  getCliente(id: number): Observable<{}> {
    return this.http.get(this.url + '/' + id);
  }

  deleteCliente(id: number): Observable<{}> {
    return this.http.delete(this.url + '/' + id);
  }

  updateCliente(id: number, cliente: any): Observable<{}> {
    return this.http.put(this.url + '/' + id, cliente);
  }

}
