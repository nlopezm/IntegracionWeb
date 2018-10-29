import { Component } from '@angular/core';
import { using } from 'rxjs';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent {

  search = '';
  clientesTotales: any = [
    { id: 1, nombre: 'Nahuel', apellido: 'López', documento: 4520 },
    { id: 2, nombre: 'Nacho', apellido: 'Fili' },
    { id: 3, nombre: 'Ke', apellido: 'Cat' },
  ];
  clientes: any;
  loading = false;

  constructor() {
    this.clientes = this.clientesTotales;
  }

  deleteCliente(i: number) {

  }

  searchCliente() {
    this.clientes = this.clientesTotales.filter((cliente) => {
      const nombre = (cliente.nombre + ' ' + cliente.apellido).toLowerCase();
      return (nombre.indexOf(this.search.toLowerCase()) > -1)
        || (cliente.documento && cliente.documento.toString().indexOf(this.search.toLowerCase()) > -1);
    });
  }

}
